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

app.get("/api/recipe_ingredients", async (req, res) => {

  const recipeId = req.query.recipeId;
  console.log(recipeId);

   if (!recipeId) {
    return res.status(400).json({ error: 'recipeId query parameter is required' });
  }

  try{
    const result = await pool.query("SELECT * FROM recipe_ingredients WHERE recipe_id = $1", [recipeId]);
    res.json(result.rows);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
})

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get("/api/recipe_instructions", async (req, res) => {

  const recipeId = req.query.recipeId;

  if (!recipeId) {
    return res.status(400).json({ error: 'recipeId query parameter is required' });
  }

   try{
    const result = await pool.query("SELECT * FROM recipe_instructions WHERE recipe_id = $1", [recipeId]);
    res.json(result.rows);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});