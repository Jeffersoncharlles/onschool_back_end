import express from 'express';
import 'express-async-errors'
import cors from 'cors'
import { Routers } from './routers';

const app = express()
app.use(express.json())
app.use(cors())
app.use(Routers)
app.listen(process.env.PORT || 3333, () => console.log(`⚡[start]:🚀 http://localhost:3333`))
