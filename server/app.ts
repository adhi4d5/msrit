import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as expressJwt from 'express-jwt';
import * as session from 'express-session';
import * as jwt from 'jsonwebtoken';
import setRoutes from './routes';
import AdminRoutes from './routers/AdminRoutes';
const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let mongodbURI;
if (process.env.NODE_ENV === 'test') {
  mongodbURI = process.env.MONGODB_TEST_URI;
} else {
  mongodbURI = process.env.MONGODB_URI;
  app.use(morgan('dev'));
}



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SECRET_TOKEN, resave: false, saveUninitialized: true }));
app.use('/api', expressJwt({ secret:process.env.SECRET_TOKEN}).unless({path: ['/api/login','/api/user',] }))

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongodbURI, { useMongoClient: true });

mongodb.then((db) => {
    console.log('Connected to MongoDB on', db.host + ':' + db.port);
    setRoutes(app);
    AdminRoutes(app);
    
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    if (!module.parent) {
      app.listen(app.get('port'), () => {
        console.log('Server listening on port ' + app.get('port'));
      });
    }

  })
  .catch((err) => {
    console.error(err);
});

export { app };
