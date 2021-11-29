import { expect, countResources } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { IamUserWithAccessKey } from '../src';

describe('User', () => {
  it('creates the user', () => {
    const stack = new Stack();
    new IamUserWithAccessKey(stack, 'User', {
      // secretName: 'IamUserWithAccessKeySecret',
      userName: 'iamUserWithAccessKeyUsername',
    });
    expect(stack).to(countResources('AWS::IAM::User', 1));
    expect(stack).to(countResources('AWS::IAM::AccessKey', 1));
    expect(stack).to(countResources('AWS::SecretsManager::Secret', 1));
    //TODO: Test that generateSecretString for the Secret is always null!
  });
});
