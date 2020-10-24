import express, { Application } from 'express'

// Routes
import movies from './routes/movies';
import auth from './routes/auth'

const app: Application = express();

app.use('/movies', movies);
app.use('/auth', auth)

const PORT: string | number = process.env.PORT ||5000;

app.listen(5000, () => console.log(`Server running on port: ${PORT}...`))