import express from "express";
import cors from "cors";
import pg from "pg";
import {pool} from "pool";

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    }
));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RecipeTracker',
  password: 'postGRESQL',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err)
  } else {
    console.log('Connected to database at:', res.rows[0].now)
  }
})