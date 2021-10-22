/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [
    {
      name: 'appFork',
      script: 'dist/index.js',
      watch: true,
      autorestart: true,
      args: '--puerto=8081',
    },
    {
      name: 'appCluster',
      script: 'dist/index.js',
      watch: true,
      autorestart: true,
      instances: 'max',
      args: '--puerto=8082',
    },
  ],
};
