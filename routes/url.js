const express=require("express")
const {handleGenerateNewShortURL, handleGetAnalytics} = require("../controllers/url")

const router=express.Router()


//ENDPOINTS(ROUTES) TO FUNCTION MAPPINGS WOULD BE DONE HERE
// FUNCTIONS RESIDE IN THE CONTROLLERS FROM WHERE THEY ARE REQUIRED TO BE IMPORTED 

router.post('/',handleGenerateNewShortURL)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports=router;


