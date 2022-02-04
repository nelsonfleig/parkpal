module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'parkpaldb',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
};
