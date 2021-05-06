import logo from './logo.svg';
import './App.css';

import Displaycards from './components/Displaycards/Displaycards';
import Dropdown from './components/Dropdown/Dropdown';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import updateReducer from './components/reducer';
import {createStore} from 'redux';
import {useSelector,useDispatch} from 'react-redux';
import loadData from './components/actioncreator';
import Charts from './components/Charts/Charts'





function App() {
  const [data,setData]=useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get("https://corona-api.com/countries").then((res)=>{
      console.log(res.data.data)
      setData(res.data.data);
      dispatch(loadData(data))
      
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
        
        <div>
        <Displaycards datapass={data}/>
        <Dropdown datas={data}/>
        <Charts datachart={data}/>
      </div>
    
    
        
   
    
   
  );
}

export default App;
