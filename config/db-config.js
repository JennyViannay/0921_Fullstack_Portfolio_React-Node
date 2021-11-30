import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config(process.cwd(), '.env');

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connect.connect((err) => {
    if (err) console.log(`MySQL is not connected : ${err}`)
    else console.log('Connection to mySQL is ok ! ')
})

export default connect;