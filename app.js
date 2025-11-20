import express from 'express'
import routes from './src/routes/index.js';
import mongoose from 'mongoose';
import ENV from './src/constants/index.js';
import chalk from 'chalk';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use('/api/', routes)

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@hassancluster.7w9v4hs.mongodb.net/${ENV.DB_NAME}?appName=HassanCluster`)

mongoose.connection.on("connected", () => {
    console.log(chalk.blueBright.bold("Database connected"))

})

mongoose.connection.on("error", (error) => {
    console.log('err'.error)
})

app.listen(port, () => {
    console.log(chalk.green.bold(`server is listening on port ${port}`))
})
