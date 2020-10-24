import express, { Application } from 'express'

// Routes
import movies from './routes/movies';
import auth from './routes/auth'
import users from './routes/users'

const app: Application = express();

app.use('/movies', movies);
app.use('/auth', auth)
app.use('/users', users)

const PORT: string | number = process.env.PORT ||5000;

app.listen(5000, () => console.log(`Server running on port: ${PORT}...`))