
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const Math = require('math');








router.get('/graphicsMarkup', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    
    let usersPageNumber=req.header('pageNumber')
    let maxRowLength=req.header('maxRowLength')
    
    let fullSize=respJson.length
    let sizeToCrop=0
    if((usersPageNumber+1)*maxRowLength>fullSize){
      sizeToCrop=fullSize-(usersPageNumber+1)*maxRowLength
    }
    else{
      sizeToCrop=(usersPageNumber+1)*maxRowLength
    }
    let cropped=respJson.slice(usersPageNumber*maxRowLength,sizeToCrop)
    
  res.status(200).json({fragment:cropped})
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message,reason:1})
  }


})
router.get('/graphicsMarkupPages', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    let usersRows=req.header('rows')
    let numberOfPages=Math.ceil(respJson.length/usersRows)
  res.status(200).json({pages:numberOfPages})
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message,reason:1})
  }


})





    
module.exports = router