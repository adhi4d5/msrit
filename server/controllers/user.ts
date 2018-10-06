import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    console.log("loginnnnnnnnnn");
    console.log(process.env.SECRET_TOKEN);
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user },process.env.SECRET_TOKEN); 
          // , {expiresIn:60*30} { expiresIn: 10 } seconds
        console.log("token",token);
        res.status(200).json({ token: token });
      });
    });
  }

}
