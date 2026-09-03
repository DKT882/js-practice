import pg from 'pg'
import dotenv from "dotenv"
dotenv.config()
// const pool = pg.Pool()

const {Pool}=pg;
const pool=new Pool({connectionString:process.env.DATABASE_URI})



export default pool;