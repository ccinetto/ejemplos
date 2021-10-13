/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [
    {
      script: 'dist/index.js',
      watch: true,
      autorestart: true,
      instances: 5,
    },
  ],
};
