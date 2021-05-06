import React from 'react'
import Doughnutchart from './Doughnutchart'
import Grid from '@material-ui/core/Grid';

const Charts = ({datachart}) => {
    console.log(datachart)
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                <Doughnutchart datapassed={datachart}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Charts
