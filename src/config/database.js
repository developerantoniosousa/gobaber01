module.exports = {
  dialect: 'postgres',
  username: 'docker',
  password: 'docker',
  host: '127.0.0.1',
  database: 'gobarberapp',
  operatorAliases: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
}