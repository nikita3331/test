
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');







router.get('/graphicsMarkup', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    console.log(respJson.length)
  res.status(200).json(respJson)
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message,reason:1})
  }


})
router.get('/graphicsMarkupPages', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    console.log(req.header('rows'))
  res.status(200).json(respJson)
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message,reason:1})
  }


})





    
module.exports = router