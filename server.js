import express from 'express';
import routes from './routes/index.js';
import mongodb from './db/mongoConnect.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use("/", routes)

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(process.env.port || port, () => {
            console.log(`Server running on port: ${process.env.port || port}`);
        });
    }
});