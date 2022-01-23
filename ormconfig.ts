import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"

require("dotenv/config")

export const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/src/**/*.js"],
    migrations: [
        "dist/src/database/migration/*.js"
    ],
    cli: {
        migrationsDir: "src/database/migration"
    },
    synchronize: true,
}