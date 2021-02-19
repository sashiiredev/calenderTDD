import {createConnection, getRepository} from 'typeorm';
import { Event } from "../src/entities/Event";




export async function testConnection() {

    await createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: [Event],
        synchronize: true,
        dropSchema: true
    });
}