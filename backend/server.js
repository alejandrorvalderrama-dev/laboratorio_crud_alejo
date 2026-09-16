Server.js

const app = require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/config/seedAdmin');

async function start, () => {
    console.log(`laboratorio API CRUD ejecutandose en http://localhost:${env.PORT}`);
});
}

start();


