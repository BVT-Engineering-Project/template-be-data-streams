# 1. Repository Template Backend Services 


Sebuah project web dengan base javascript (expressjs) untuk keperluan data streams project Garudaeye polri.

- [1. Repository Backend Services Autentikasi Backend Indonesia Bertutur]

## 1.1. Backend Services

1. **Users**
   1. SSE services

## 1.2. Kebutuhan Untuk Developer
### 1.2.1. Base

1. NodeJS versi LTS lates / (v16.17.1) 
2. npm / yarn CLI (Command Line Intefaces)


### 1.2.2. Tech Stack

| Category            | Name                    |
| ------------------- | --------------          |
| Language            | **JavaScript**          |
| BE Framework        | **Expressjs**           |
| State Manager       | **React Hook**          |
| Database            | **Postgres**            |
| SSE                 | **express-sse**         |
| ORM                 | **Sequalize**           |
| DB adapter          | **pg**                  |
| Linter              | **ESLint**              |
| Mailer              | **Node Mailer**         |
| Email services      | **Amazon**              |

### 1.2.3. Struktur Project

```makefile
BE-DATA-STREAMS
├── api 
|  ├── controllers
|  ├── helper
|  ├── middleware
|  ├── models
|  ├── routes
|  ├── services

├── app.js
├── nodemon.json.example 
├── package.json
├── REAME.md
├── sequelize.js
├── server.js
```

### 1.2.4. Setup & Running

#### 1.2.4.1. zip download
1. Extract be-event-dev.zip yang disediakan
2. Buka root project dengan IDE (VSccode / Intelij)
3. Gunakan salah satu antara npm cli/yarn cli
4. Package installation & project running 
   - Jika menggunakan npm, jalankan perintah berikut:
        ```
        npm install
        npm start
        ```
   - Jika menggunakan yarn, jalankan perintah berikut:
        ```
        yarn install
        yarn start
        ```
        ```
            [nodemon] starting `node server.js`
            Running Server On Port 5001...
        ```
        **PS:** Gunakan tools postman untuk pengecekan API

5. Database connection config

- Import sql database `dbname.sql` ke postgre
- Ganti file `nodemon.json.example` ke `nodemon.json`
- Edit konfigurasi database pada `nodemon.json`
```
{
    "env":{
      "PORT"                  : 5001,
      "APP_URL"               : "http://localhost:5001",
      "JWT_KEY"               : "<SECRETJWTKEY>", # jwt key (bebas)
      "JWT_TOKENLIFE"         :"3h",
      "JWT_refreshTokenLife"  : 86400,
      "DB_HOST"               : "localhost", # Jika menggunakan host local
      "DB_PORT"               : "5432", # postgres port (default)
      "DB_NAME"               : "dbname", # nama database (default)
      "DB_USER"               : "<dbusername>", # ganti dengan username database postgres
      "DB_PWD"                : "<password>", # ganti dengan password database postgre
    }
  }
```

### 1.2.5. Build
- Build dengan npm

    ```
    npm run build
    ```

- Build dengan yarn
    ```
    yarn build
    ```

### 1.2.6. API Collection

Copyright © 2023 Bhumi Varta Technology. All Rights Reserved.
