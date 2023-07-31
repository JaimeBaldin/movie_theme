import { Sequelize } from "sequelize";

const connection = new Sequelize('movie_theme', 'root', 'mypassword', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default connection;