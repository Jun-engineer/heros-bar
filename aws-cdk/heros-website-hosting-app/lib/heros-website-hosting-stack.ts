// @(#)heros-website-hosting-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import config = require('config');
import { NagSuppressions } from 'cdk-nag';
import { HerosWebsiteHosting } from './resources/heros-website-hosting';

export class HerosWebsiteHostingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    // Lookup

    const herosWebsiteHosting = new HerosWebsiteHosting(this, 'HerosWebsiteHosting', {
      envName: config.get('common.environment'),
      sysName: config.get('common.systemName'),
      hostName: config.get('common.hostName'),
    });

    // cdk-nagエラー抑止
    NagSuppressions.addResourceSuppressions(this,
      [
        {id: "", reason: '', appliesTo: [""]}
      ],
      true,
    );
  }
}
