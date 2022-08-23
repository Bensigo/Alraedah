import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

app.get('/test', (req, res) => {
  res.send('test');
});

app.use(router);

export default app;
