module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      serviceAccount: {
        type: 'service_account',
        project_id: 'windhappers-web-application',
        private_key_id: env('WINDHAPPERS_CMS_UPLOAD_GS_SERVICE_ACCOUNT_KEY_ID'),
        private_key: env('WINDHAPPERS_CMS_UPLOAD_GS_SERVICE_ACCOUNT_PRIVATE_KEY').replace(/\\n/g, '\n'),
        client_email: env('WINDHAPPERS_CMS_UPLOAD_GS_SERVICE_ACCOUNT_EMAIL'),
        client_id: env('WINDHAPPERS_CMS_UPLOAD_GS_SERVICE_ACCOUNT_ID'),
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/windhappers-backups%40windhappers-web-application.iam.gserviceaccount.com'
      },
      bucketName: 'windhappers-cms-uploads'
    },
  },
});
