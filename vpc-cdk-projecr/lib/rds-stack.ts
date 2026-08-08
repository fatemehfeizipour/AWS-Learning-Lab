import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

interface RDSStackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
}

export class RDSStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: RDSStackProps){
        super(scope, id, props);

    const mysqlEngine = rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_4_9
    });

    const parameterGroupAZa = new rds.ParameterGroup(this, 'PARAMETER-AZa', {
        engine: mysqlEngine,
        parameters: {
            max_connections: '100'
        }
    });
    const postgresEngine = rds.DatabaseInstanceEngine.postgres({
            version: rds.PostgresEngineVersion.VER_18_3
    });
        // RDS configuration
    // RDS instanceAZa in AZ 1a 
    const instanceAZa = new rds.DatabaseInstance(this, 'RDS-AZa', {
        vpc: props.vpc,
        vpcSubnets: {
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            availabilityZones: [props.vpc.availabilityZones[0]]
        },
        // Set up MySQL 8.0 as the database engine
        engine: mysqlEngine,
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
        // Configure storage settings
        // Have initial storage of 20GB
        // Be able to scale up to 30GB
         // Have deletion protection disabled
        allocatedStorage: 20,
        maxAllocatedStorage: 30,
        deletionProtection: false,
        // handle removal policies for clean up
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        // Configure backup settings
        backupRetention:cdk.Duration.days(7),
        preferredBackupWindow: '03:00-04:00',
        parameterGroup: parameterGroupAZa
    });
        cdk.Tags.of(instanceAZa).add('Name', 'RDS-AZa')
        //Add a CloudFormation output to display the RDS endpoint.
    const cfnInstancePropsa = new cdk.CfnOutput(this, 'CFN-AZa', {
        value: instanceAZa.dbInstanceEndpointAddress
        });
    
    

    const parameterGroupAZb = new rds.ParameterGroup(this, 'PARAMETER-AZb', {
        engine: mysqlEngine,
        parameters: {
            max_connections: '100'
        }
    });

    const parameterGroupPostgres = new rds.ParameterGroup(this, 'PARAMETER-POSTGRES', {
        engine: postgresEngine,
        parameters: {
            max_connections: '100'
        }
    });
        // RDS instanceAZb in AZ 1b
    const instanceAZb = new rds.DatabaseInstance(this, 'RDS-AZb', {
        vpc: props.vpc,
        vpcSubnets: {
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            availabilityZones: [props.vpc.availabilityZones[1]]
        },
        // Set up MySQL 8.0 as the database engine
        engine: mysqlEngine,
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
        
        // Configure storage settings
        // Have initial storage of 20GB
        // Be able to scale up to 30GB
         // Have deletion protection disabled
        allocatedStorage: 20,
        maxAllocatedStorage: 30,
        deletionProtection: false,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        // Configure backup settings
        backupRetention:cdk.Duration.days(7),
        preferredBackupWindow: '03:00-04:00',
        parameterGroup:parameterGroupAZb

    });
    cdk.Tags.of(instanceAZb).add('Name', 'RDS-AZb')
        //Add a CloudFormation output to display the RDS endpoint.
    const cfnInstancePropsb = new cdk.CfnOutput(this, 'CFN-AZb', {
        value: instanceAZb.dbInstanceEndpointAddress
    });
    

    // Add a different database engine (PostgreSQL)
    const postgres = new rds.DatabaseInstance(this, 'POSTGRESQL-AZb', {
        vpc: props.vpc,
        vpcSubnets: {
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            availabilityZones: [props.vpc.availabilityZones[1]]
        },
        engine: postgresEngine,
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
        allocatedStorage: 20,
        maxAllocatedStorage: 30,
        deletionProtection: false,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        // Configure backup settings
        backupRetention: cdk.Duration.days(7),
        preferredBackupWindow: '03:00-04:00',
        parameterGroup: parameterGroupPostgres
    });
    cdk.Tags.of(postgres).add('Name', 'POSTGRESQL-AZb')
    const cfnInstancePromps = new cdk.CfnOutput(this,'CFN-POSTB', {
        value: postgres.dbInstanceEndpointAddress
    });
    }
}