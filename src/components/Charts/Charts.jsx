import React from "react";
import Doughnutchart from "./Doughnutchart";
import Grid from "@material-ui/core/Grid";
import "./chartscss/Charts.css";
import Piechart from "./Piechart";
import Polararea from "./Polararea";
import { useSelector } from "react-redux";

import Barchart from './Barchart'



const Charts = ({ datachart }) => {


  const changeddata = useSelector((state) => state.individualData);
  

  const changed = useSelector((state) => state.changed);
 

  return (
    <>
      {changed ? (
        <>
          {changed && changeddata.latest_data.confirmed > 0 ? (
            <>
              <div className="charts__div">
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <Doughnutchart datapassed={datachart} />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <Piechart datapassed={datachart} />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4} xl={4}>
                    <Polararea datapassed={datachart} />
                  </Grid>
                </Grid>
              </div>

              <div className="seperator">
                <Grid container>
                <Grid item xs={12}>
                  <div className="dotted">
                 
                  </div>
                </Grid>
                </Grid>
              </div>
              <div className="charts__div2">
                <Grid container>
                  {/* <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Linechart datapassed={datachart} />
                  </Grid> */}

                    {/* <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Radarchart datapassed={datachart} />
                  </Grid> */}

                  <Grid item xs={12} >
                    <Barchart datapassed={datachart} />
                  </Grid>
                </Grid>
              </div>
            </>
          ) : (
            <h4 className="no__cases">
              <em>
                No Active Cases Present in <span>{changeddata.name}</span>
              </em>
            </h4>
          )}
        </>
      ) : (
        <>
          {datachart[0] ? (
            <>
              <div className="charts__div">
                <Grid container spacing={6} >
                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <Doughnutchart datapassed={datachart} />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4} xl={4}>
                    <Piechart datapassed={datachart} />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4} xl={4}>
                    <Polararea datapassed={datachart} />
                  </Grid>
                </Grid>
              </div>

              <div className="seperator">
                <Grid container>
                <Grid item xs={12}>
                  <div className="dotted">
                 
                  </div>
                </Grid>
                </Grid>
              </div>

              <div className="charts__div2">
                <Grid container spacing={6}>
                  {/* <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Linechart datapassed={datachart} />
                  </Grid> */}

                      {/* <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Radarchart datapassed={datachart} />
                  </Grid> */}

                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Barchart datapassed={datachart} />
                  </Grid>
                </Grid>
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Charts;
