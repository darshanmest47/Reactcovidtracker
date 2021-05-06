import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import "../Displaycards/cardscss/Displaycard1.css";
import { useSelector } from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import CountUp from 'react-countup';



const Displaycard1 = ({ passdata }) => {
 
  console.log(passdata[0]);
  const sdata = useSelector((state) => state.individualData);
  console.log(sdata);
  const changed = useSelector((state) => state.changed);
  console.log(changed);



  

    // setDataName()
  
 

  return (
    <div>
      {changed ? (
       
        <Card className="display__card1">
          <CardContent>
          <p><em>Country: {sdata.name}</em></p>
          <p><em>Population: <CountUp start={0} end={sdata.population}  duration={3}/></em></p>
          <p><em>Critical: <CountUp start={0} end={sdata.latest_data.critical}  duration={3}/></em></p>
          </CardContent>
    
        </Card>
      ) : (
          <>
           {passdata[0]?(  <Card className="display__card1">
             <CardContent>
             <p><em>Country: {passdata[0].name}</em></p>
          <p><em>Population:  <CountUp start={0} end={passdata[0].population}  duration={3} /></em></p>
          <p><em>Critical: <CountUp start={0} end={passdata[0].latest_data.critical}  duration={3}/></em></p>
             </CardContent>
       
        </Card>):(null)}
          
          </>
         
    
      )}
    </div>
  );
};

export default Displaycard1;
