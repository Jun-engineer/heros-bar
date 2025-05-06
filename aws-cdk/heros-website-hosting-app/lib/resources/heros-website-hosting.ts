// @(#)heros-website-hosting.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NagSuppressions } from 'cdk-nag';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface HerosWebsiteHostingProps {
  envName: string;
  sysName: string;
  hostName: string;
};

export class HerosWebsiteHosting extends Construct {
  constructor(scope: Construct, id: string, props: HerosWebsiteHostingProps) {
    super(scope, id);

    cdk.Tags.of(this).add(
      'SystemName',
      props.sysName,
    )

    // S3 bucket for web site hosting
    const myHostingBucket = new s3.Bucket(this, 'HostingBucket', {
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      bucketName: `${props.envName}-heros-website-hosting-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      bucketKeyEnabled: true,
      objectLockEnabled: false,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned: false,
    });

    // CloudFront
    const myCloudfrontDistribution = new cloudfront.Distribution(this, 'CloudfrontDistribution', {
      defaultRootObject: "index.html",
      enabled: true,
      enableIpv6: true,
      enableLogging: false,
      logIncludesCookies: false,
      publishAdditionalMetrics: false,
      httpVersion: cloudfront.HttpVersion.HTTP2,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,      
      defaultBehavior: {
        origin: cloudfront_origins.S3BucketOrigin.withOriginAccessControl(myHostingBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
    });

    // Bucket Policy
    const myHostingBucketPolicy = new s3.CfnBucketPolicy(this, 'HostingBucketPolicy', {
      bucket: myHostingBucket.bucketName,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Sid: 'AllowCloudFrontServicePrincipal',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudfront.amazonaws.com',
            },
            Action: 's3:GetObject',
            Resource: `${myHostingBucket.bucketArn}/*`,
            Condition: {
              StringEquals: {
                'AWS:SourceArn': myCloudfrontDistribution.distributionArn,
              },
            }
          },
        ],
      },
    })

    // cdk-nag suppressions
    NagSuppressions.addResourceSuppressions(myHostingBucket,
      [
        {id: 'AwsSolutions-S1', reason: 'no server access log is needed'}
      ],
      true,
    );
    
    NagSuppressions.addResourceSuppressions(myCloudfrontDistribution,
      [
        {id: 'AwsSolutions-CFR3', reason: 'no access log is needed'},
        {id: 'AwsSolutions-CFR4', reason: 'no security policy is needed'},
      ],
      true,
    );

    NagSuppressions.addResourceSuppressions(myHostingBucketPolicy,
      [
        {id: 'AwsSolutions-S10', reason: 'aws:SecureTransport condition is not needed'},
      ],
      true,
    );
  }
}
