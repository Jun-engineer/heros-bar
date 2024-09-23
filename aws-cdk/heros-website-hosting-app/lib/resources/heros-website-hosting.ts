// @(#)heros-website-hosting-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NagSuppressions } from 'cdk-nag';
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
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

    /* S3バケット */
    // S3サーバーアクセスログバケット
    const serverAccessLogBucket = new s3.Bucket(this, 'ServerAccessLogBucket', {
      accessControl: s3.BucketAccessControl.LOG_DELIVERY_WRITE,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }),
      bucketName: `${props.envName}-heros-s3-accesslog-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned: false,
    });

    // CloudFront用アクセスログバケット
    const cloudFrontAccessLogBucket = new s3.Bucket(this, 'CloudFrontAccessLogBucket', {
      accessControl: s3.BucketAccessControl.LOG_DELIVERY_WRITE,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }),
      bucketName: `${props.envName}-heros-cloudfront-accesslog-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned: false,
    });

    // WEBサイトホスティング用S3バケット
    const hostingBucket = new s3.Bucket(this, 'HerosWebsiteHostingBucket', {
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }),
      bucketName: `${props.envName}-heros-website-hosting-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      serverAccessLogsBucket: serverAccessLogBucket,
      versioned: false,
    });

    /* Route53 */
    const publicHostedZone = new route53.PublicHostedZone(this, 'PublicHostedZone', {
      zoneName: `testHostedZone`, // ホストゾーン名は修正する。
    });

    /* ACM */
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: `testDomain`, // ドメイン名は修正する。
    });

    /* CloudFront */
    const cloudfrontDistribution = new cloudfront.Distribution(this, 'CloudfrontDistribution', {
      defaultRootObject: "index.html", // 適宜ファイル名を修正する。
      errorResponses: [
        {
          ttl: cdk.Duration.minutes(1),
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: "/error.html",
        },
        {
          ttl: cdk.Duration.minutes(1),
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: "/error.html",
        },
      ],
      defaultBehavior: {
        origin: cloudfront_origins.S3BucketOrigin.withOriginAccessControl(hostingBucket),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
      },
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      domainNames: [ publicHostedZone.zoneName ],
      certificate: certificate,
      logBucket: cloudFrontAccessLogBucket,
    });

    // cdk-nagエラー抑止
    NagSuppressions.addResourceSuppressions(cloudFrontAccessLogBucket,
      [
        {id: 'AwsSolutions-S1', reason: 'no server access log to be enabled'}
      ],
      true,
    );
    
    // NagSuppressions.addResourceSuppressions(cloudFrontAccessLogBucket,
    //   [
    //     {id: '', reason: '', appliesTo: ['']}
    //   ],
    //   true,
    // );
  }
}
