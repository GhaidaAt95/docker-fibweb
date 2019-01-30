module.exports = {
    // REDIS
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,

    // POSTGRES
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
};