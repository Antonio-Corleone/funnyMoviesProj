const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');


module.exports = (phase) => {
  // env variable for dev
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        LOCAL_API: 'http://localhost:3000/',
        DB_USERNAME: 'TuanVu',
        DB_PASSWORD: 'VUMINHTUAN371995',
        DB_CLUSTER: '@tuanvu',
        DB_DATABASE_NAME: 'my-funny-movie'
      }
    }
  }
    // env variable for production
  return {
    env: {
      PROD_API: 'https://funny-movies-proj-ju8uyjxq0-antonio-corleone.vercel.app/',
      DB_USERNAME: 'TuanVu',
        DB_PASSWORD: 'VUMINHTUAN371995',
        DB_CLUSTER: '@tuanvu',
        DB_DATABASE_NAME: 'my-funny-movie'
    }
  }
}