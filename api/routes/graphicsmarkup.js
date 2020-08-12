
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');








router.post('/graphicsMarkup', async (req, res) => { 
  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()

    
    let filteredByLocations=respJson.filter((item)=>{
      return item.location.reduce((accumulator, current) => accumulator && req.body.locations.includes(current),true)
    })
    console.log(filteredByLocations)

    let sortingObj=req.body.sorting
    let sortedValues=[]
    let chosenFrame='out_frame'

    if(sortingObj.in_frame.active){//we are sorting by inframe
      chosenFrame='in_frame'
    }


    if(sortingObj[chosenFrame].ascending){
      sortedValues=respJson.sort(function(a, b){return a[chosenFrame]-b[chosenFrame]});
    }
    else{
      sortedValues=respJson.sort(function(a, b){return b[chosenFrame]-a[chosenFrame]});
    }

    let usersPageNumber=parseInt(req.body.pageNumber) 
    let maxRowLength=parseInt(req.body.maxRowLength) 
    let fullSize=respJson.length
    let sizeToCrop=0
    if((usersPageNumber+1)*maxRowLength>fullSize){
      sizeToCrop=fullSize
    }
    else{
      sizeToCrop=(usersPageNumber+1)*maxRowLength
    }
    let cropped=sortedValues.slice(usersPageNumber*maxRowLength,sizeToCrop)


    
  res.status(200).json({success:true,fragment:cropped})
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message})
  }


})
router.get('/graphicsMarkupPages', async (req, res) => { 


  try {

    let url='https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json'
    let resp=await fetch(url)
    let respJson=await resp.json()
    let usersRows=req.header('rows')
    let numberOfPages=Math.ceil(respJson.length/usersRows)
  res.status(200).json({success:true,pages:numberOfPages})
  

  } catch (err) {
    res.status(500).json({success:false,message:err.message})
  }


})





    
module.exports = router