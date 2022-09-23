import postgres from "postgres";

const sql = postgres(
  process.env.DB_CONNECTION_URL,
  process.env.NODE_ENV === "production"
    ? {
        ssl: { rejectUnauthorized: false },
        max_lifetime: 60 * 30,
      }
    : {}
);

export default async function getTodo(req, res) {
    if (req.method === "GET") {
      try {
        const tasks = await sql`
        SELECT * FROM todo`;
        res.status(200).json({ tasks });
      } catch (err) {
        console.error("Bad news in index api: ", err);
        return res.status(500).json({ msg: "Messed up on our end" });
      } 
    } else if (req.method === "POST") {
        try {
        const { task } = req.body;
        const tasks = await sql`
        INSERT INTO todo (task) VALUES (${task}) RETURNING *`;
        res.status(200).json({ tasks });
        } catch (error) {
            console.error("Bad news in index api: ", err);
            return res.status(500).json({ msg: "Messed up on our end" });
        }
    } else {
      res.status(400).json({ msg: "You messed up" });
    }
  }