import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import logger from 'morgan';
import path from 'path';
import routes from './server/routes/index';
import config from './webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use((webpackDevMiddleware)(compiler));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, './client/src/public')));

app.use(logger('dev'));
routes(app);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/src/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`connected on ${port}`));

export default app;
