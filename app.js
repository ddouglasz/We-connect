import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import logger from 'morgan';
import routes from './server/routes/index';
import config from './webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('/*', (req, res) => {
  res.sendFile('./client/src/index.html');
});

const port = process.env.PORT || 8003;
app.listen(port, () => console.log(`connected on ${port}`));

export default app;
