
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const Math = require('math');








router.get('/graphicsMarkup', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    
    let usersPageNumber=parseInt(req.body.pageNumber) 
    let maxRowLength=parseInt(req.body.maxRowLength) 
    let sortingObj=req.body.sorting
    console.log(sortingObj)
    let fullSize=respJson.length
    let sizeToCrop=0




    if((usersPageNumber+1)*maxRowLength>fullSize){
      sizeToCrop=fullSize
    }
    else{
      sizeToCrop=(usersPageNumber+1)*maxRowLength
    }
    let cropped=respJson.slice(usersPageNumber*maxRowLength,sizeToCrop)

    let sortedValues=[]
    let chosenFrame='out_frame'
    let ascending=true
    if(sortingObj.in_frame.active){//we are sorting by inframe
      chosenFrame='in_frame'
    }
    if(sortingObj[chosenFrame].type=='descending'){
      ascending=false
    }

    if(ascending){
      sortedValues=cropped.sort(function(a, b){return a[chosenFrame]-b[chosenFrame]});
    }
    else{
      sortedValues=cropped.sort(function(a, b){return b[chosenFrame]-a[chosenFrame]});
    }
    
  res.status(200).json({fragment:sortedValues})
  

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