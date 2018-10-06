
import * as mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema({
  Name:{ type: String},
  Author:{ type: String},
  date:{ type: String},
  published:{ type: String},
  Quantity_of_books_available:{ type: String},
 });
const BooksData = mongoose.model('BooksSchema', BooksSchema);
export default BooksData;
