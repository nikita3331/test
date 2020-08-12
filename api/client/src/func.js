import axios from 'axios';
let myurl='https://testwirewax.herokuapp.com/' 
export async function fetchData(){
    let url=myurl+'api/graphicsMarkup'

    let resp=await axios.get(url)
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
