const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Markus Ellers',
  authorAddress: 'm.ellers@inno-on.de',
  cdkVersion: '1.139.0',
  defaultReleaseBranch: 'main',
  name: '@innovations-on-gmbh/cdk-iamuserwithaccesskey',
  description: 'Creating an IAM user with access key stored in Secrets manager',
  keywords: ['IAM', 'Access Key', 'Secretsmanager'],
  repositoryUrl: 'https://github.com/innovations-on-gmbh/cdk-iamuserwithaccesskey.git',
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com/',

  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/core',
  ],
  cdkAssert: true,
  gitignore: [
    '.DS_Store',
    '.idea',
  ],
  docgen: true,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['inno-on-bot'] },
  autoApproveProjenUpgrades: true,
  depsUpgradeOptions: {
    ignoreProjen: false,
  },

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();
