module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('CMS_DATABASE_HOST', 'postgres'),
        port: env.int('CMS_DATABASE_PORT', 5432),
        database: env('CMS_DATABASE_NAME', 'windhappers-cms'),
        username: env('CMS_DATABASE_USERNAME', 'postgres'),
        password: env('CMS_DATABASE_PASSWORD', 'postgres'),
        ssl: env.bool('CMS_DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
