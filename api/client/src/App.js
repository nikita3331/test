import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table'
import {fetchData,fetchPageNumbers} from './func'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={pageNumber:0,elements:[]}
    
}
componentDidMount(){
  this.fetchNumberOfPages()
  this.fetchData()
}
async fetchNumberOfPages(){
  let numberOfRows=20
  let number =await fetchPageNumbers(numberOfRows)
  console.log(number)
}
async fetchData(){
  let resp=await fetchData(this.state.pageNumber)
  console.log(resp)
}
renderTableRow(){
return(
  <tr>
    <th>2</th>
    <th>2</th>
    <th>3</th>
    <th>haaaaaaaaaaaaaalo</th>
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
