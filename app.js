import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/index';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'We-connect you on port 8000'
}));

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`connected on ${port}`));

export default app;

