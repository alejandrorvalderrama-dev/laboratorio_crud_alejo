Readme.md
#LAB CRUD - Backend

Backend pedagógico con Express, MySQL, bcrypt, JWT y roles
 'admin' / 'cliente'.

## 1. Base de daatos

Ejecuta '../sql/lab_crud.sql' en MySQL.

## 2. Variables de entorno

copia:

'.env.example' -> '.env'

y completa las credenciales de MySQL y 'JWT_SECRET'.

## 3 Insstalar 

''''bash
npm install
''''

## 4. Ejecutar 

''''bash
npm run dev
''''

API: 'http://localhost:3000'

## Rutas 

publicas:

- POST /api/auth/register
- POST /api/auth/login
-GET /api/health

protegidas:
- GET '/api/equipos'
- GET '/api/equipos/:id'
- POST '/api/equipos'
- PUT '/api/equipos/:id'
- DELETE '/api/equipos/:id' -solo 'admin'

## flujo pedagogico 

Registro -> bcrypt.hash -> MySQL -> login -> bcrypt.compare -> JWT -> middleware -> autorizacion por rol -> CRUD.