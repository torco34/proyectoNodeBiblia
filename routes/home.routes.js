
const router = require("express").Router();
 const { HomeController } = require("../controllers")
 


router.get("/", HomeController.index);

 router.get("/about", HomeController.about);

//PROYECTO MIO
//const { QuotesController } = require("../controllers")

module.exports = router;



//revisado con combios  era el que estab fallando