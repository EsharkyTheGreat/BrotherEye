import express from "express";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";

const NEO4J_URI = "neo4j://localhost:7687";

dotenv.config();
const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD),
);

const app = express();

app.listen(4000, async () => {
  const serverInfo = await driver.getServerInfo();
  console.log(serverInfo);
  console.log("Server is running on port 4000");
});
