import React from 'react'
import Displaycard1 from './Dispalycard1'
import Displaycard2 from './Displaycard2'
import Displaycard3 from './Displaycard3'
import '../Displaycards/cardscss/Displaycards.css'
import Grid from '@material-ui/core/Grid';

const Displaycards = ({datapass}) => {
  
    return (
        <div  className="display__cards">
            <Grid container spacing={6}>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                <Displaycard1 passdata={datapass}/>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                <Displaycard2 passdata={datapass}/>
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                <Displaycard3 passdata={datapass}/>
                </Grid>
                </Grid>
           
           
            
        </div>
    )
}

export default Displaycards
