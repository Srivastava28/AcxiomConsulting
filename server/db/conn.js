import { connect } from "mongoose";
import { config } from "dotenv";

config();
connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:" ,error);
  });
