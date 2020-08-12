import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table'
import {fetchData,fetchPageNumbers} from './func'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={pageNumber:1,elements:[],maxAmountOfRows:19,numberOfPages:0}
    
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
  let resp=await fetchData(this.state.pageNumber,this.state.maxAmountOfRows)
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
renderTable(){
  return(
    <Table striped bordered hover  >
      <thead>
        <tr>
          <th>in_frame</th>
          <th>out_frame</th>
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
render(){
  return(
    <div>
        <div style={{verticalAlign:'center',textAlign:'center'}} >Graphics Markup Results</div>
        <div style={{display: 'flex', alignItems:'center'}}>
          {this.renderTable()}
        </div>
        
    </div>
  )
}
}

export default Main;
