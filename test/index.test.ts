// import { expect, countResources } from '@aws-cdk/assert';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IamUserWithAccessKey } from '../src';


describe('User', () => {
  test('Template has the correct resources', () => {
    let stack: Stack;
    stack = new Stack();
    new IamUserWithAccessKey(stack, 'User', {
      // secretName: 'IamUserWithAccessKeySecret',
      userName: 'iamUserWithAccessKeyUsername',
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::IAM::User', 1);
    template.resourceCountIs('AWS::IAM::AccessKey', 1);
    template.resourceCountIs('AWS::SecretsManager::Secret', 1);
    expect(template).toMatchSnapshot();
    //TODO: Test that generateSecretString for the Secret is always null!
  });
});
