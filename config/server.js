module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  url: env('WINDHAPPERS_CMS_API_EXTERNAL_URL', 'http://127.0.0.1:1337'),
  admin: {
    url: env('WINDHAPPERS_CMS_GUI_EXTERNAL_PATH', '/admin'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a14a1820826fac0520ac91bdb9bb272f'),
    },
  },
});
