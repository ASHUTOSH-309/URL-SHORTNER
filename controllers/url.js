const  shortid  = require("shortid");
const URL = require("../models/url");



async function handleGenerateNewShortURL(req, res) {
        const body = req.body;//will return the payload
  
        
        //body.url will return us the redirection url
        if (!body.url) return res.status(400).json({ error: "url is required" });
        const shortID = shortid();
        
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory:[]
        });
        
        const allURLS=await URL.find({})
        return res.render("home",{
            
            id: shortID,
            urls:allURLS,

        
        
        })

}



async function handleGetAnalytics(req,res){

        const shortId=req.params.shortId;
        console.log(req.body)
       console.log(typeof(shortId)) 
        const result =await URL.findOne({shortId})
        console.log(result)
        return res.json({totalClicks:result.visitHistory.length,
            analytics:result.visitHistory,
        })
}


module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics,
}