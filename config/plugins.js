var fs = require('fs');

module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      serviceAccount: readJson(env('CMS_API_UPLOAD_GS_SERVICE_ACCOUNT_KEY', '/run/secrets/gcp-credentials.json')),
      bucketName: env('CMS_API_UPLOAD_GS_BUCKET', 'windhappers-dev-cms-uploads'),
    },
  },
});

function readJson(filename) {
  if (!fs.existsSync(filename)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
