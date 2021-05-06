import React from 'react'
import Card from '@material-ui/core/Card';
import '../Displaycards/cardscss/Displaycard3.css'
import {useSelector} from 'react-redux'
import CardContent from '@material-ui/core/CardContent';
import CountUp from 'react-countup';
const Displaycard3 = ({passdata}) => {
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
              <p><em>Updated: {sdata.updated_at}</em></p>
              <p><em>Today's Deaths:  <CountUp start={0} end={sdata.today.deaths}/></em></p>
              <p><em>Today's Confirms: <CountUp start={0} end={sdata.today.confirmed}/></em></p>
              </CardContent>
           
          </Card>
        ) : (
            <>
             {passdata[0]?(  <Card className="display__card2">
             <CardContent>
              <p><em>Updated: {passdata[0].updated_at}</em></p>
              <p><em>Today's Deaths:  <CountUp start={0} end={passdata[0].today.deaths}/></em></p>
              <p><em>Today's Confirms: <CountUp start={0} end={passdata[0].today.confirmed}/></em></p>
              </CardContent>
           
          </Card>):(null)}
            
            </>
           
      
        )}
      </div>
    );
}

export default Displaycard3
