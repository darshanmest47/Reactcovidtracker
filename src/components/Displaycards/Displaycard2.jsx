import React from 'react'
import Card from '@material-ui/core/Card';
import '../Displaycards/cardscss/Displaycard2.css'
import {useSelector} from 'react-redux'
import CardContent from '@material-ui/core/CardContent';
import CountUp from 'react-countup';

const Displaycard2 = ({passdata}) => {
    console.log(passdata[0]);
    const sdata = useSelector((state) => state.individualData);
    console.log(sdata);
    const changed = useSelector((state) => state.changed);
    console.log(changed);
  
  
  
    
  
      // setDataName()
    
   
  
    return (
      <div>
        {changed ? (
          <Card className="display__card2">
              <CardContent>
              <p><em>Confirmed: <CountUp start={0} end={sdata.latest_data.confirmed}/></em></p>
              <p><em>Recovered: <CountUp start={0} end={sdata.latest_data.recovered}/></em></p>
              <p><em>Deaths: <CountUp start={0} end={sdata.latest_data.deaths}/></em></p>
              </CardContent>
           
          </Card>
        ) : (
            <>
             {passdata[0]?(  <Card className="display__card2">
             <CardContent>
              <p><em>Confirmed: <CountUp start={0} end={passdata[0].latest_data.confirmed}/></em></p>
              <p><em>Recovered: <CountUp start={0} end={passdata[0].latest_data.recovered}/></em></p>
              <p><em>Deaths: <CountUp start={0} end={passdata[0].latest_data.deaths}/></em></p>
              </CardContent>
           
          </Card>):(null)}
            
            </>
           
      
        )}
      </div>
    );
}

export default Displaycard2
