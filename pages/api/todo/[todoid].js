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
  const id = req.query.todoid;
  if (req.method === "DELETE") {    
    try {
      const deleteTask = await sql`
             DELETE FROM todo WHERE id = ${id}`;
      res.status(200).json({ deleteTask });
    } catch (error) {
      console.error("Bad news in index api: ", err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  // } else if (req.method === "PATCH") {
  //   try {
  //     const patchTask = await sql`
  //     UPDATE todo SET task = ${req.body.task} WHERE id = ${id}`;
  //     res.status(200).json({ patchTask });
  //   } catch (error) {
  //     console.error("Bad news in index api: ", err);
  //     return res.status(500).json({ msg: "Messed up on our end" });
  //   }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}