module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  url: env('CMS_API_EXTERNAL_URL', 'http://127.0.0.1:1337'),
  admin: {
    url: env('CMS_GUI_EXTERNAL_PATH', '/admin'),
    auth: {
      secret: env('CMS_API_JWT_SECRET', 'a14a1820826fac0520ac91bdb9bb272f'),
    },
  },
});
