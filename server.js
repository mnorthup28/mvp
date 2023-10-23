import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

app.use(cors({ origin: "*", methods: "get" }));
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("All good here");
  console.log("hello");
});

app.get("/trails", (req, res) => {
  const { distance, hills, hard_surface, military_id_needed } = req.query;
  if (Object.keys(req.query).length === 0) {
    client.query("SELECT * FROM trailTable").then((result) => {
      console.log(result.rows);
      res.json(result.rows);
    });
  } else {
    client
      .query(
        "SELECT * FROM trailTable WHERE distance >= $1 AND hills = $2 AND hard_surface = $3 AND military_id_needed = $4",
        [distance, hills, hard_surface, military_id_needed]
      )
      .then((data) => {
        res.json(data.rows);
      });
  }
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

app.post("/trails", (req, res) => {
  const { name } = req.body;
  if (req.body.length === 0) {
    res.sendStatus(400);
  }
  const newTrail = { name };
  console.log("new trail: ", newTrail);
  client
    .query(`INSERT INTO trailSuggestionTable (name) VALUES ($1) RETURNING *`, [
      name,
    ])
    .then((data) => {
      console.log(data.rows[0]);
      res.send(data.rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
