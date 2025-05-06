// @(#)dev-heros-website-hosting-snapshot-count.test.ts

import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HerosWebsiteHostingStack } from '../../lib/heros-website-hosting-stack';
import config = require('config');

const app = new cdk.App({
    context: {
        'aws:cdk:availability-zones:fallback': [
            'ap-northeast-1a',
            'ap-northeast-1c',
            'ap-northeast-1d',
        ],
    }
});

const herosWebsiteHostingStack = new HerosWebsiteHostingStack(app, 'HerosWebsiteHostingStack', {
    description: 'CDK Test Code for heros website hosting.',
    env: {
        account: config.get('common.account'),
        region: config.get('common.region'),
    },
});

const herosWebsiteHostingStackTemplate = Template.fromStack(herosWebsiteHostingStack);

describe('Snapshot test', () => {
    test('to match snapshot', () => {
        expect(herosWebsiteHostingStackTemplate).toMatchSnapshot();
    });
});

describe('resourceCountIs test', () => {
    test('S3 Bucket', () => {
        herosWebsiteHostingStackTemplate.resourceCountIs('AWS::S3::Bucket', 1);
    });
});
