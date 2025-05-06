#!/usr/bin/env node
// @(#)heros-website-hosting-app.ts

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as nag from 'cdk-nag';
import * as config from 'config';
import { HerosWebsiteHostingStack } from '../lib/heros-website-hosting-stack';

// 環境変数「NODE_ENV」が未設定であれば処理を終了する。
if (!process.env.NODE_ENV) {
  console.error(
    'The envName variable "NODE_ENV" is not set. \
    \nPlease set it to "dev", "stg", or "prd". \
    \nExample: export NODE_ENV=Dev'
  );
  process.exit(1);
}
const envName: string = process.env.NODE_ENV;

// CDKアプリケーションを作成
const app = new cdk.App();

// CDKアプリケーション上にStack定義をロード
new HerosWebsiteHostingStack(app, `${envName}-HerosWebsiteHostingAppStack`, {
  // Stack基本設定
  description: 'Stack of standard architecture for heros website hosting.',
  env: {
    account: config.get('common.account'),
    region: config.get('common.region')
  },

  // 削除保護を設定
  terminationProtection: true,
});

// CDKアプリケーション全体に共通タグを付与
cdk.Tags.of(app).add('Environment', config.get('common.environment'));

// CDKアプリケーション全体に対してcdk-nagによる静的解析を実行
cdk.Aspects.of(app).add(new nag.AwsSolutionsChecks({ verbose: true}));
