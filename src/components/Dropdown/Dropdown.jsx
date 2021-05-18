import React from 'react'
import './Dropdowncss/Dropdown.css'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import getData from '../actioncreatorgetData'


const Dropdown = ({datas}) => {
    
    
    const dispatch = useDispatch()
    //const changed = useSelector(state => state.changed)
  
    const handleChange=(e)=>{
     
        axios.get(`https://corona-api.com/countries/${e.target.value}`).then((res)=>{
            
            dispatch( getData(res.data.data))
            

        }).catch((err)=>{
            console.log(err)
        })
    }
    

        
   
    return(
        <div className="dropdown__div">
{datas!=null?(
    <div>
        <em>Select A Country : </em>
         <select className="select__dropdown" onChange={(e)=> handleChange(e) }>
            {datas.map((doc)=>{
                return(
                   
                    <option key={doc.code} value={doc.code} >{doc.name}</option>
            
                )
               
              
            })}
          
        
        
            </select>
    </div>
   
   
           
       ):(null)}
        </div>
        
    )

}

export default Dropdown
