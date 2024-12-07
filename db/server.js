import cors from "cors";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/db.js";
import swaggerSpec from "./config/swagger.js";
import cartRouter from "./routes/cartRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";
// const swaggerDocument = require('./src/configs/swagger.json');  // load swaggerSpec from file
import categoryRoutes from "./routes/CategoryRoutes.js";
import ngoFoodRouter from "./routes/NGOFoodRoute.js";
import notificationRoutes from "./routes/NotificationRoutes.js";
import rawMaterialRoutes from "./routes/RawMaterialRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import excessFoodRoutes from "./routes/excessFoodRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

// app config
const app = express();
const port = 4000;

// cors configuration
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: "*",
};
// middleware
app.use(express.json());
app.use(cors(corsOptions));

// DB connection
connectDB();

// Use routes
app.use("/api/categories", categoryRoutes);
app.use("/api/raw-materials", rawMaterialRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/excess-food", excessFoodRoutes);

// Serve the Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// // load swagger from json file
// var options = {
//   swaggerOptions: {
//       url: "/api-docs/swagger.json",
//   },
// }
// app.get("/api-docs/swagger.json", (req, res) => res.json(swaggerDocument));
// app.use('/api-docs', swaggerUi.serveFiles(null, options), swaggerUi.setup(null, options));

// api endpoints
app.use("/api/food", foodRouter);
app.use("/api/ngofood", ngoFoodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/ngos", ngoRoutes);
app.use("/api/payment", paymentRoutes);

// Define server port
const APPLICATION_PORT = process.env.APPLICATION_PORT; // Default to 3000 if environment variable is not set

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(APPLICATION_PORT, () => {
  console.log(`Server running on port ${APPLICATION_PORT}`);
  console.log(
    `Swagger docs available at http://${process.env.APPLICATION_HOST}:${APPLICATION_PORT}/api-docs`
  );
});
