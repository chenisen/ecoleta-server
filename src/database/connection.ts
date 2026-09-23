import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'better-sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;
