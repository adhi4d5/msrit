import * as express from 'express';

import AdminCtrl from '../controllers/AdminController';
import User from '../models/user';

export default function setRoutes(app) {
  const router = express.Router();
  const AdminController = new AdminCtrl();
  // All data insert        
  router.route('/books/insert').post(AdminController.BooksInsert);
  ///// get all data retrieve 
  router.route('/books/GetAllbooks').get(AdminController.GetAllBooks);

  router.route('/books/RemoveBook').post(AdminController.RemoveBook);
  
  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
