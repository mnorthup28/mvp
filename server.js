import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("All good here");
});

app.get("/trails", (req, res) => {
  client.query("SELECT * FROM trailTable").then((result) => {
    res.json(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
