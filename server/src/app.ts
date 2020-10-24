import express, {Request, Response, Application} from 'express'

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.json({msg: "Hello world!"})
})

const PORT: string | number = process.env.PRODUCTION ||5000;

app.listen(5000, () => console.log(`Server running on port: ${PORT}...`))