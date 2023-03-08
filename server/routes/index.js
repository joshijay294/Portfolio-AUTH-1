//  file name : index.js
//    Name : Rohit
//    Student ID : 301315173
// 	Date : 25-02-2023




let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


router.get('/', indexController.displayHomePage);





router.get('/home', indexController.displayHomePage);


router.get('/about', indexController.displayAboutPage);



router.get('/products', indexController.displayProductsPage);


router.get('/services', indexController.displayServicesPage);




router.get('/contactus', indexController.displayContactPage);

// get router for login page
router.get('/login',indexController.displayLoginPage);

//post router for login page
router.post('/login',indexController.processLoginPage);

// get router for register page
router.get('/register',indexController.displayRegisterPage);

//post router for regsiter page
router.post('/register',indexController.processRegisterPage);

//get to perform logout
router.get('/logout',indexController.performLogout);

module.exports = router;
