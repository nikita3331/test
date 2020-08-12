module.exports = {
    filterByLocations: function (wholeBase,locations) {
        let filteredByLocations=[]
        if(locations.length>0){
            filteredByLocations=wholeBase.filter((item)=>{
             return item.content.location.reduce((accumulator, current) => accumulator && locations.includes(current.toLowerCase()),true)
           })
           }
           else{
             filteredByLocations=wholeBase
           }
        return filteredByLocations
    },
    sortAscDesc: function (sortingObj,locations) {
        let chosenFrame='out_frame'
        let sortedValues=[]
        if(sortingObj.in_frame.active){//we are sorting by inframe
          chosenFrame='in_frame'
        }
    
    
        if(sortingObj[chosenFrame].ascending){
          sortedValues=locations.sort(function(a, b){return a[chosenFrame]-b[chosenFrame]});
        }
        else{
          sortedValues=locations.sort(function(a, b){return b[chosenFrame]-a[chosenFrame]});
        }
        return sortedValues
    },


  };