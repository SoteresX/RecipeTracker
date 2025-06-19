import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const {Pool} = pg;

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    }
));

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err)
  } else {
    console.log('Connected to database at:', res.rows[0].now)
  }
})