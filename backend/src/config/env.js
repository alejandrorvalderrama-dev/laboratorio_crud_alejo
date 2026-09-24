require('dotenv').config();

const required = ['DB_HOST', 'DB_USER','DB_NAME', 'JWT_SECRET'];

for (!process.env[name]) {
    throw new Error(`falta la variable de entorno: ${name}`);
}

module.exports = {
    port: number(process.env.PORT || 3000),
    port: number(process.env.DB_PORT || 3306),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

};
jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '2h'
}

admin: {
    name: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD 
};