const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Markus Ellers',
  authorAddress: 'm.ellers@inno-on.de',
  cdkVersion: '2.15.0',
  majorVersion: '1',
  defaultReleaseBranch: 'main',
  releaseBranches: {
    'feature/majorVersion2': {
      majorVersion: '2',
      prerelease: true,
      workflowName: 'release-majorVersion2',
    },
  },
  name: '@innovationson/cdk-iamuserwithaccesskey',
  description: 'Creating an IAM user with access key stored in Secrets manager',
  keywords: ['IAM', 'Access Key', 'Secretsmanager'],
  repositoryUrl: 'https://github.com/innovations-on-gmbh/cdk-iamuserwithaccesskey.git',
  npmDistTag: 'latest',
  releaseToNpm: true,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'docs'],
      },
    },
  },
  // depsUpgradeOptions: {
  //   ignoreProjen: false,
  //   workflowOptions: {
  //     schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
  //   },
  // },
  devDeps: ['aws-cdk-lib', 'constructs', 'awslint'],
  gitignore: ['.DS_Store', '.idea', '.vscode'],
  docgen: true,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['inno-on-bot'] },
  autoApproveProjenUpgrades: true,
  renovatebot: true,
  renovatebotOptions: {
    scheduleInterval: ['every weekend'],
  },
});
project.synth();
