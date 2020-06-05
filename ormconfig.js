module.exports = {
  type: process.env.DATABASE_TYPE,
  url: process.env.DATABASE_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: process.env.TYPE_ORM_LOGGING,
  entities: [process.env.DATABASE_ENTITY_DIRECTORY],
  useUnifiedTopology: true
};