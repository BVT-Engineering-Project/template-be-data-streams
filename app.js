const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('@middleware/errorHandler');
const webRoutes = require('./api/routes');
const multer = require('multer');
const upload = multer();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('@helper/swaggerDoc');
const streams = require('./api/fetch/sseConnect');
const compression = require('compression');

app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(upload.array('file'));
app.use(express.static('public'));
// app.use(bodyParser.json());
app.use(cors());
app.use(compression());

// Web Routes
app.use('/', webRoutes);
app.use('/streams-update', streams.init);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Handle Error
app.use(errorHandler);
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  req.header(
    'Access-Control-Allow-Origin',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    req.header('Access-Control-Allow-Method', 'PUT, POST, DELETE, PATCH, GET');
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
