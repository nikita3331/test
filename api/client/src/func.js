import axios from 'axios';
let myurl='https://testwirewax.herokuapp.com/' 
export async function fetchData(pageNumber,maxAmountOfRows,sorting){
    let url=myurl+'api/graphicsMarkup'
    let payload = {
        pageNumber: pageNumber,
        maxRowLength:maxAmountOfRows ,
        sorting:sorting
        };
    let resp=await axios.post(url,payload)
    console.log(resp)
    let dat=await resp.data
    return dat
}
export async function fetchPageNumbers(numberOfRows){
    let url=myurl+'api/graphicsMarkupPages'
    let config={ headers: { rows: numberOfRows }}
    let resp=await axios.get(url,config)
    let dat=await resp.data
    return dat
}
