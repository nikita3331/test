import axios from 'axios';
let myurl='https://testwirewax.herokuapp.com/' 
export async function fetchData(pageNumber,maxAmountOfRows,sorting,filterArray){
    let url=myurl+'api/graphicsMarkup'
    let payload = {
        pageNumber: pageNumber,
        maxRowLength:maxAmountOfRows ,
        sorting:sorting,
        locations:filterArray
        };
    let resp=await axios.post(url,payload)
    let dat=await resp.data
    console.log(dat)

    if(dat.success){
        return dat
    }
    else{
        return []
    }
    
}

