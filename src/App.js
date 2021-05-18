
import './App.css';

import Displaycards from './components/Displaycards/Displaycards';
import Dropdown from './components/Dropdown/Dropdown';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import loadData from './components/actioncreator';
import Charts from './components/Charts/Charts'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'






function App() {
  const [data,setData]=useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get("https://corona-api.com/countries").then((res)=>{
      
      setData(res.data.data);
      dispatch(loadData(data))
      
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
        
        <div>
          <Navbar/>
        <Displaycards datapass={data}/>
        <Dropdown datas={data}/>
        <Charts datachart={data}/>
        <Footer/>
      
      </div>
    
    
        
   
    
   
  );
}

export default App;
