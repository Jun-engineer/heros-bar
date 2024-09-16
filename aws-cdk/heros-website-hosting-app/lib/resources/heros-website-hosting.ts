import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

interface HerosWebsiteHostingInterface extends cdk.StackProps {
  xxx: string;
  yyy: number;
  zzz: boolean;
}

export class HerosWebsiteHosting extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: HerosWebsiteHostingInterface) {
    super(scope, id, props);

    const hostingBucket = new s3.Bucket(this, 'HerosWebsiteHostingBucket', {
      bucketName: `${config.envName}-heros-website-hosting-bucket`,
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HerosWebsiteHostingAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
