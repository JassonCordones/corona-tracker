import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/image.png'

import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component{
  state = {
    data: {},
    country: ''
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});

    //fetch the data 
    //set the state
  }
  render(){
    const {data, country} = this.state
    return(
      <div className={styles.container}>
        <img className={styles.image} src={ coronaImage } alt="COVID-19"/>
        <Cards data = { data } />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={ data } country={ country }/>
      </div>
    )
  }
}
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

export default App;
