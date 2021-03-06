# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### IamUserWithAccessKey <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskey"></a>

An IAM User including an Access Key that will be stored in Secrets Manager.

The properties as for normal IAM Users.

#### Initializers <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.Initializer" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyinitializer"></a>

```typescript
import { IamUserWithAccessKey } from '@innovationson/cdk-iamuserwithaccesskey'

new IamUserWithAccessKey(scope: Construct, id: string, props?: IamUserWithAccessKeyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterprops) | [`@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps`](#@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.parameter.scope" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.parameter.id" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.parameter.props" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyparameterprops"></a>

- *Type:* [`@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps`](#@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accessKey`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropertyaccesskey)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.CfnAccessKey`](#aws-cdk-lib.aws_iam.CfnAccessKey) | An attribute that represents the iam access_key. |
| [`secret`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropertysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret) | An attribute that represents the secret. |

---

##### `accessKey`<sup>Required</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.accessKey" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropertyaccesskey"></a>

```typescript
public readonly accessKey: CfnAccessKey;
```

- *Type:* [`aws-cdk-lib.aws_iam.CfnAccessKey`](#aws-cdk-lib.aws_iam.CfnAccessKey)

An attribute that represents the iam access_key.

---

##### `secret`<sup>Required</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKey.property.secret" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropertysecret"></a>

```typescript
public readonly secret: Secret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.Secret`](#aws-cdk-lib.aws_secretsmanager.Secret)

An attribute that represents the secret.

---


## Structs <a name="Structs" id="structs"></a>

### IamUserWithAccessKeyProps <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeyprops"></a>

Properties for the IAM User.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IamUserWithAccessKeyProps } from '@innovationson/cdk-iamuserwithaccesskey'

const iamUserWithAccessKeyProps: IamUserWithAccessKeyProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`groups`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertygroups) | [`aws-cdk-lib.aws_iam.IGroup`](#aws-cdk-lib.aws_iam.IGroup)[] | Groups to add this user to. |
| [`managedPolicies`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertymanagedpolicies) | [`aws-cdk-lib.aws_iam.IManagedPolicy`](#aws-cdk-lib.aws_iam.IManagedPolicy)[] | A list of managed policies associated with this role. |
| [`password`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypassword) | [`aws-cdk-lib.SecretValue`](#aws-cdk-lib.SecretValue) | The password for the user. This is required so the user can access the AWS Management Console. |
| [`passwordResetRequired`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypasswordresetrequired) | `boolean` | Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console. |
| [`path`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypath) | `string` | The path for the user name. |
| [`permissionsBoundary`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypermissionsboundary) | [`aws-cdk-lib.aws_iam.IManagedPolicy`](#aws-cdk-lib.aws_iam.IManagedPolicy) | AWS supports permissions boundaries for IAM entities (users or roles). |
| [`userName`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertyusername) | `string` | A name for the IAM user. |
| [`encryptionKey`](#innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertyencryptionkey) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | An optional custom encryption key for the secret. |

---

##### `groups`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.groups" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertygroups"></a>

```typescript
public readonly groups: IGroup[];
```

- *Type:* [`aws-cdk-lib.aws_iam.IGroup`](#aws-cdk-lib.aws_iam.IGroup)[]
- *Default:* No groups.

Groups to add this user to.

You can also use `addToGroup` to add this user to a group.

---

##### `managedPolicies`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.managedPolicies" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertymanagedpolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* [`aws-cdk-lib.aws_iam.IManagedPolicy`](#aws-cdk-lib.aws_iam.IManagedPolicy)[]
- *Default:* No managed policies.

A list of managed policies associated with this role.

You can add managed policies later using `addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policyName))`.

---

##### `password`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.password" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypassword"></a>

```typescript
public readonly password: SecretValue;
```

- *Type:* [`aws-cdk-lib.SecretValue`](#aws-cdk-lib.SecretValue)
- *Default:* User won't be able to access the management console without a password.

The password for the user. This is required so the user can access the AWS Management Console.

You can use `SecretValue.unsafePlainText` to specify a password in plain text or use `secretsmanager.Secret.fromSecretAttributes` to reference a secret in Secrets Manager.

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.passwordResetRequired" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypasswordresetrequired"></a>

```typescript
public readonly passwordResetRequired: boolean;
```

- *Type:* `boolean`
- *Default:* false

Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console.

If this is set to 'true', you must also specify "initialPassword".

---

##### `path`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.path" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypath"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`
- *Default:* /

The path for the user name.

For more information about paths, see IAM Identifiers in the IAM User Guide.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.permissionsBoundary" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertypermissionsboundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* [`aws-cdk-lib.aws_iam.IManagedPolicy`](#aws-cdk-lib.aws_iam.IManagedPolicy)
- *Default:* No permissions boundary.

AWS supports permissions boundaries for IAM entities (users or roles).

A permissions boundary is an advanced feature for using a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity. An entity's permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `userName`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.userName" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertyusername"></a>

```typescript
public readonly userName: string;
```

- *Type:* `string`
- *Default:* Generated by CloudFormation (recommended)

A name for the IAM user.

For valid values, see the UserName parameter for the CreateUser action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the user name.  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.  If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.

---

##### `encryptionKey`<sup>Optional</sup> <a name="@innovationson/cdk-iamuserwithaccesskey.IamUserWithAccessKeyProps.property.encryptionKey" id="innovationsoncdkiamuserwithaccesskeyiamuserwithaccesskeypropspropertyencryptionkey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* The Accounts default Secret Manager KMS Key will be used.

An optional custom encryption key for the secret.

---



