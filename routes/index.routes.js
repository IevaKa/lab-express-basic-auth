const express = require('express');
const router = express.Router();

const loginCheck = () => {
    return (req, res, next) => {
      // is the user logged in 
      if (req.session.user) {
        next();
      } else {
        res.redirect('/login');
      }
    }
  }
/* GET home page */
router.get('/', (req,  res) => res.render('index'));
router.get('/main', loginCheck(), (req, res) => res.render('main'));
router.get('/private', loginCheck(), (req, res) => res.render('private'));


module.exports = router;
