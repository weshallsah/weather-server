import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  return res.status(200).json({
    message: "Server is spining!",
  });
});

app.get("/raining",async(req,res)=>{
  return res.status(200).json({
    message:"there is raning outside!"
  });
});

app.get("/weather", async (req, res) => {
  return res.status(200).json({
    message: "the weather is sunny!",
  });
});

app.listen(PORT, "0.0.0.0", async () => {
  console.log("Server is Spining on Port :", PORT);
});
