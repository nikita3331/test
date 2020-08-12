
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const tools = require('../func/toolFunctions');








router.post('/graphicsMarkup', async (req, res) => { 
  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    let filteredByLocations=tools.filterByLocations(respJson,req.body.locations)

    let sortedValues=tools.sortAscDesc(req.body.sorting,filteredByLocations)
    let fullSize=sortedValues.length 

    let cropped=tools.cropToPage(sortedValues,parseInt(req.body.pageNumber) ,parseInt(req.body.maxRowLength),fullSize)
    let amountOfPages=Math.ceil(fullSize/req.body.maxRowLength)

    
  res.status(200).json({success:true,fragment:cropped,totalAmount:amountOfPages})
  

  } catch (err) {
    res.status(201).json({success:false,message:err.message})
  }


})






    
module.exports = router