import express, { Application } from 'express'
import movies from './routes/movies';

const app: Application = express();

app.use('/movies', movies);

const PORT: string | number = process.env.PORT ||5000;

app.listen(5000, () => console.log(`Server running on port: ${PORT}...`))