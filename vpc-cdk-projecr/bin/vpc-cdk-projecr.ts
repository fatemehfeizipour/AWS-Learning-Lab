#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { VpcCdkProjecrStack } from '../lib/vpc-cdk-projecr-stack';
import { EC2Stack } from '../lib/ec2-stack';
import { RDSStack } from '../lib/rds-stack';

const app = new cdk.App();
const vpcStack = new VpcCdkProjecrStack(app, 'VpcCdkProjecrStack', {
});

new EC2Stack(app, 'MyEC2Stack', {
  vpc: vpcStack.vpc
});

new RDSStack(app, 'RDS', {
  vpc: vpcStack.vpc
});

app.synth()
