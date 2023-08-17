import Express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
// import userroute.js lalu use userRoute tersebut

// membuat variable app untuk menggunakan express
const app = Express();
// membuat midleware
app.use(cors());
app.use(Express.json());
app.use(UserRoute);

const port = app.listen(3001, () => {
  console.log(" server running on http://localhost:3001 ");
});

port.on("lestening", () => {
  console.log(" berjalan ");
});

port.on("error", (error) => {
  console.log(" server error : ", error);
});
