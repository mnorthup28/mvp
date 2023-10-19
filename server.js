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
    console.log;
    res.json(result.rows);
  });
});

app.get("/trails/:id", (req, res) => {
  const trailId = req.params.id;
  client
    .query(`SELECT * FROM trailTable WHERE id = $1`, [trailId])
    .then((data) => {
      if (data.rows.length == 0) {
        console.log("Not a valid trail");
        res.sendStatus(404);
      }
      res.json(data.rows[0]);
      console.log(data.rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
