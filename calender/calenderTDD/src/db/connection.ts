
//type orm 
import "reflect-metadata";
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const opts: ConnectionOptions = {
    name:"default",
    type: "mysql",
    host: "localhost",
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQl_DATABASE_NAME,
}


class Connection {
    private name: string | undefined;
    constructor(private options: ConnectionOptions = opts) {
        this.name = options.name;
    }
    async create() {
        return await createConnection(this.options);
    }

    async close() {
        const connection = await this.get();
        return await connection.close();
    }

    async get() {
        return await getConnection(this.name);
    }
    async clear() {
        const connection = await this.get();
        const entities = connection.entityMetadatas;

        const entityDeletionPromises = entities.map((entity) => async () => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });

        await Promise.all(entityDeletionPromises);
    }
};
export default Connection