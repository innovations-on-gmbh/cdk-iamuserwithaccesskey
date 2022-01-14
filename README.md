# CDK IAM User with Access Key

[AWS CDK] L3 construct for managing IAM Users with static credentials.

CDK does not support creating Access Keys, so this construct helps you to do it correctly. It creates three resources:

- An IAM User
- An Access Key
- A Secrets Manager Secret

You should only use this for technical access to AWS APIs. Not for personal user accounts.

## Installation

### projen

This package has peer dependencies, which need to be installed along in the expected version.

When using projen add the following to your .projenrc:

```typescript
  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/core',
  ],
  deps: ['@innovations-on-gmbh/cdk-iamuserwithaccesskey'],
```

## npm Package Installation

```bash
yarn add --dev @innovations-on-gmbh/cdk-iamuserwithaccesskey
# or
npm install @innovations-on-gmbh/cdk-iamuserwithaccesskey --save-dev
```

## Usage

### Typescript

```typescript
import { App, Construct, Stack, StackProps } from '@aws-cdk/core';
import { IamUserWithAccessKey } from '@innovations-on-gmbh/cdk-iamuserwithaccesskey';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new IamUserWithAccessKey(this, 'myUser', {
      userName: 'markus',
    });
  }
}
```

### Accessing the Credentials in Secrets Manager

The AccessKey and SecretAccessKey will be stored in AWS Secrets Manager. The arn will be added as a cfn Output.

To download the details via AWS cli you can run:

```bash
aws secretsmanager get-secret-value \
  --secret-id $secretId \
  --query SecretString \
  --output text
```

### Tag support

TBD

### Encryption

Secrets in the AWS Secrets Manager by default are encrypted with the key `alias/aws/secretsmanager`.

To use a custom KMS key you can pass it to the user:

```typescript
const kmsKey = new kms.Key(this, 'KMS-key');
new IamUserWithAccessKey(this, 'myUser', {
    userName: 'markus',
    encryptionKey: kmsKey,
});
```

This KMS key needs to be created in the same stack. You cannot use a key imported via ARN, because the keys access policy will need to be modified.

[AWS CDK]: https://aws.amazon.com/cdk/
