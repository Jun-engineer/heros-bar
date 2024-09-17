// @(#)heros-website-hosting-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NagSuppressions } from 'cdk-nag';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

interface HerosWebsiteHostingProps {
  envName: string;
  sysName: string;
  hostName: string;
}

export class HerosWebsiteHosting extends Construct {
  constructor(scope: Construct, id: string, props: HerosWebsiteHostingProps) {
    super(scope, id);

    cdk.Tags.of(this).add(
      'SystemName',
      props.sysName,
    )

    // WEBサイトホスティング用S3バケット
    const hostingBucket = new s3.Bucket(this, 'HerosWebsiteHostingBucket', {
      bucketName: `${props.envName}-heros-website-hosting-bucket`,
    });

    // cdk-nagエラー抑止
    NagSuppressions.addResourceSuppressions(hostingBucket,
      [
        {id: "", reason: '', appliesTo: [""]}
      ],
      true,
    );
  }
}
