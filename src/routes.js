const multerConfig = require('./config/multer');

const routes = require('express').Router();
const upload = require('multer')(multerConfig);

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const SessionController = require('./app/controllers/SessionController');
const DashboardController = require('./app/controllers/DashboardController');
const UserController = require('./app/controllers/UserController');
const FileController = require('./app/controllers/FileController');
const AppointmentController = require('./app/controllers/AppointmentController');
const AvailableController = require('./app/controllers/AvailableController');

routes.use((req, res, next) => {
  res.locals.flashError = req.flash('error');
  res.locals.flashSuccess = req.flash('success');

  return next();
});

routes.get('/files/:file', FileController.show);

routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

routes.use('/app', authMiddleware);

routes.get('/app/dashboard', DashboardController.index);
routes.get('/app/logout', SessionController.destroy);

routes.get('/app/appointment/new/:provider', AppointmentController.create);
routes.post('/app/appointment/new/:provider', AppointmentController.store);

routes.get('/app/available/:provider', AvailableController.index);

module.exports = routes;
