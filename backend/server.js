import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js'
import estateRoutes from './routes/estateRoutes.js'
import userRoutes from './routes/userRoutes.js'
import favouriteRoutes from './routes/favouriteRoutes.js'
import postAtRoutes from './routes/postAtRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

connectDB(); // MongoDB connect

const port = process.env.PORT || 5001;
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/estates", estateRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favourites", favouriteRoutes);
app.use("/api/postat", postAtRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));