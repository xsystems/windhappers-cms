module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('WINDHAPPERS_CMS_DATABASE_HOST', 'postgres'),
        port: env.int('WINDHAPPERS_CMS_DATABASE_PORT', 5432),
        database: env('WINDHAPPERS_CMS_DATABASE_NAME', 'windhappers-cms'),
        username: env('WINDHAPPERS_CMS_DATABASE_USERNAME', 'postgres'),
        password: env('WINDHAPPERS_CMS_DATABASE_PASSWORD', 'postgres'),
        ssl: env.bool('WINDHAPPERS_CMS_DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
