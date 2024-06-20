import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/p3tp2funcionario')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
