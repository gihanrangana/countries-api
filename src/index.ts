import express from 'express';
import dotenv from 'dotenv'
import router from './v1/routes';

dotenv.config()

const PORT = process.env.port || 4000

const app = express()

app.use(express.json())

app.use('/v1', router)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

module.exports = app