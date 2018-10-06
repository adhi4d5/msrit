import * as dotenv from 'dotenv';
import Books from '../models/Booksmodel'


export default class AdminCtrl {
  
  Booksmodel = Books;

  BooksInsert = (req, res) => {
    var Data=req.body;
    //console.log("ZoneData",ZoneData);
    var inst=this;
        //console.log("ZoneData",ZoneData)
        inst.Booksmodel.create(Data, (err, result) => {
          if(err){return res.status(400).send(err);}
          res.send(result);
        });
  }

  

/////// get details of  state /zone/dist/mandal/villages /////////

GetAllBooks = (req, res) => {
  this.Booksmodel.find({}, (err, result) => {
    if(err){ return res.status(400).send(err);}
    else{return res.send(result);}
  });
}

RemoveBook = (req, res) => {
  console.log("req.body",req.body);
  console.log("req.params",req.params);
  this.Booksmodel.findOneAndRemove({ _id: req.body._id }, (err,result) => {
    if (err) { 
      res.status(400).send(err);
      console.error(err); }
else{
  console.log("deleted--->>>")
  res.status(200).send(result);
}

  
    
  });
}






}
