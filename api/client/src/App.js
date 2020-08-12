import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import {fetchData,fetchPageNumbers} from './func'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={pageNumber:0,elements:[],maxAmountOfRows:8,numberOfPages:0,sorting:{in_frame:{active:true,type:'descending'},out_frame:{active:false,type:'descending'}}}
    
}
componentDidMount(){
  this.fetchNumberOfPages()
  this.fetchData()
}
async fetchNumberOfPages(){
  let resp =await fetchPageNumbers(this.state.maxAmountOfRows)
  this.setState({numberOfPages:resp.pages})
}
async fetchData(){
  let resp=await fetchData(this.state.pageNumber,this.state.maxAmountOfRows,this.state.sorting)
  console.log(resp.fragment)
  this.setState({elements:resp.fragment})

}
renderTableRow(item,idx){
  let labelsString=item.content.labels.reduce((prev,curr)=>{return prev+' '+curr},'')
  let locationString=item.content.location.reduce((prev,curr)=>{return prev+' '+curr},'')

return(
  <tr key={idx}>
    <th>{item.in_frame}</th>
    <th>{item.out_frame}</th>
    <th>{item.content.value}</th>
    <th>{labelsString}</th>
    <th>{locationString}</th>
  </tr>
)
}
sortingPressed(type){
  let newObj=this.state.sorting
  if(type==0){
    if(newObj.in_frame.type=='descending'){
      newObj.in_frame.type='ascending'
    }
    else{
      newObj.in_frame.type='descending'
    }
    newObj.in_frame.active=true
    newObj.out_frame.active=false
  }
  if(type==1){
    if(newObj.out_frame.type=='descending'){
      newObj.out_frame.type='ascending'
    }
    else{
      newObj.out_frame.type='descending'
    }
    newObj.in_frame.active=false
    newObj.out_frame.active=true
  }
  console.log(newObj)
  this.setState({sorting:newObj},()=>{this.fetchData()})
}
renderTable(){
  return(
    <Table striped bordered hover responsive >
      <thead>
        <tr>
          <th>
            <Button variant={this.state.sorting.in_frame.active?"success":'secondary'} onClick={()=>{this.sortingPressed(0)}}>in_frame</Button>  
          </th>
          <th>
            <Button variant={this.state.sorting.out_frame.active?"success":'secondary'} onClick={()=>{this.sortingPressed(1)}}>out_frame</Button>  
          </th>
          <th>value</th>
          <th>labels</th>
          <th>location</th>
        </tr>
      </thead>
      <tbody>
        {this.state.elements.map((item,idx)=>{return(this.renderTableRow(item,idx))})}
      </tbody>
    </Table>
  )
}

renderOneRow(number){

  let amount=[]
  let addZero=''
  if(number==0){addZero='0'}
      for(let i=number*10+1;i<(number+1)*10+1;i++){
        if(i-1<this.state.numberOfPages){amount.push(i)}
        
      }
  return(
    <div style={{display: 'flex', alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
      {amount.map((numColumn,b)=>{return(
      <Button variant="primary" style={{margin:'0.5vw',display:'inline-block'}} onClick={()=>{this.setState({pageNumber:numColumn-1},()=>{this.fetchData()})}}>
        {numColumn<10?addZero:null}{numColumn}
      </Button>)})}
    </div>
    
  )
}

renderPageNumbers(){
  let lengthOfRow=10
  let numberOfButtonRows=Math.ceil(this.state.numberOfPages/lengthOfRow)
  let amount=[]
  for(let i=0;i<numberOfButtonRows;i++){
    amount.push(i)
  }
  return(
      amount.map((number,b)=>{return(this.renderOneRow(number))})
  )
}
render(){
  return(
    <div>
        <div style={{verticalAlign:'center',textAlign:'center'}} >Graphics Markup Results</div>
        <div style={{display: 'flex', alignItems:'center',display:'inline-block'}}>
          {this.renderTable()}
          {this.renderPageNumbers()}
        </div>
        
    </div>
  )
}
}

export default Main;
