import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

// Props
interface EC2StackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
}

export class EC2Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: EC2StackProps) {
        super(scope, id, props);

    //EC2 Instance 1 in AZ 1a
    const instanceAZa = new ec2.Instance(this, 'MyPrivateEC2-AZa', {
        vpc: props.vpc,
        vpcSubnets: {
             subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
             availabilityZones: [props.vpc.availabilityZones[0]]
        },
        machineImage: new ec2.AmazonLinuxImage({
            generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
        }),
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)
    })

        cdk.Tags.of(instanceAZa).add('Name', 'MyPrivateEC2-AZa' )
    // EC2 Instance 2 in AZ 1b
    const instanceAZb = new ec2.Instance(this, 'MyPrivateEC2',{
        vpc: props.vpc,
        vpcSubnets: {
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            availabilityZones: [props.vpc.availabilityZones[1]]
        },
        machineImage: new ec2.AmazonLinuxImage({
            generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
        }),
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)
    })
        cdk.Tags.of(instanceAZb).add('Name', 'MyPrivateEC2-AZb')
    }
}
