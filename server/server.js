import router from './routes/user.js';
import express from 'express';
import { json } from 'express';
import cors from "cors";
const app = express();

const PORT = 5000;
import configs from './config/mongo.js';
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

app.use(json()); // to parse JSON

configs()

app.use("/api",router)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
