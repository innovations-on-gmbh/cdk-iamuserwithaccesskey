const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Markus Ellers',
  authorAddress: 'm.ellers@inno-on.de',
  cdkVersion: '2.10.0',
  majorVersion: '1',
  defaultReleaseBranch: 'main',
  name: '@innovations-on-gmbh/cdk-iamuserwithaccesskey',
  description: 'Creating an IAM user with access key stored in Secrets manager',
  keywords: ['IAM', 'Access Key', 'Secretsmanager'],
  repositoryUrl: 'https://github.com/innovations-on-gmbh/cdk-iamuserwithaccesskey.git',
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com/',
  devDeps: [
    'aws-cdk-lib',
    'constructs',
  ],
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
});
project.synth();
