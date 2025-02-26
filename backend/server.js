import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express();
const port = 8000;


//Middleware
app.use(express.json());
app.use(cors());

//Db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter);
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);
app.use('/images',express.static('uploads'));


app.get('/', (req, res) => {
  res.send('Api Working!')
})


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

