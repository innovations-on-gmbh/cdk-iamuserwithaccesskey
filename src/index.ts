import * as iam from '@aws-cdk/aws-iam';
import * as sm from '@aws-cdk/aws-secretsmanager';
import { Construct, Fn, CfnOutput } from '@aws-cdk/core';

/**
 * Properties for the IAM User
 */
export interface IamUserWithAccessKeyProps extends iam.UserProps {}

/**
 * An IAM User including an Access Key that will be stored in Secrets Manager. The properties as for normal IAM Users.
 */
export class IamUserWithAccessKey extends iam.User {
  /**
   * An attribute that represents the iam access_key.
   *
   * @attribute true
   */
  public readonly accessKey: iam.CfnAccessKey;
  /**
     * An attribute that represents the secret.
     *
     * @attribute true
     */
  public readonly secret: sm.Secret;

  constructor(scope: Construct, id: string, props?: IamUserWithAccessKeyProps) {
    super(scope, id, props);

    this.accessKey = new iam.CfnAccessKey(this, `${id}AccessKey`, {
      userName: this.userName,
    });

    let UserSecretString = JSON.stringify({
      Access_Key_Id: this.accessKey.ref,
      Secret_Access_Key: Fn.getAtt(this.accessKey.logicalId, 'SecretAccessKey').toString(), //TODO: Check if this references the correct resource. AccessKey vs SecretAccessKey
    });

    this.secret = new sm.Secret(this, `${id}UserSecret`);

    // We need to access the underlying cfn resource to set the secret string
    const cfnSecret = this.secret.node.defaultChild as sm.CfnSecret;
    cfnSecret.secretString = UserSecretString;

    new CfnOutput(this, 'SecretArn', {
      value: this.secret.secretArn.toString(),
      exportName: `${id}`,
    });
  }
}
