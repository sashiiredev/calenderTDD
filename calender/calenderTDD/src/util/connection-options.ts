import {ConnectionOptions} from 'typeorm';



export const connectionOptions:ConnectionOptions = {
    type: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    entities: [
        "src/entities/**/*.ts"

    ],
    synchronize:true
}

