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
    if(dat.success){
        return dat.fragment
    }
    else{
        return []
    }
    
}
export async function fetchPageNumbers(numberOfRows){
    let url=myurl+'api/graphicsMarkupPages'
    let config={ headers: { rows: numberOfRows }}
    let resp=await axios.get(url,config)
    let dat=await resp.data
    
    if(dat.success){
        return dat.pages
    }
    else{
        return 0
    }
}
