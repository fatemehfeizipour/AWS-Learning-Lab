#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { VpcCdkProjecrStack } from '../lib/vpc-cdk-projecr-stack';
import { EC2Stack } from '../lib/ec2-stack';

const app = new cdk.App();
const vpcStack = new VpcCdkProjecrStack(app, 'VpcCdkProjecrStack', {
});

new EC2Stack(app, 'MyEC2Stack', {
  vpc: vpcStack.vpc
})

app.synth()
