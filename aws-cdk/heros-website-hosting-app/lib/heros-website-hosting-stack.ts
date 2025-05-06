// @(#)heros-website-hosting-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import config = require('config');
import { HerosWebsiteHosting } from './resources/heros-website-hosting';

export class HerosWebsiteHostingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    new HerosWebsiteHosting(this, 'HerosWebsiteHosting', {
      envName: config.get('common.environment'),
      sysName: config.get('common.systemName'),
      hostName: config.get('common.hostName'),
    });
  }
}
