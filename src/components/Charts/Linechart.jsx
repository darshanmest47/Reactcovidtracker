import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import './chartscss/Line.css'

const Linechart = ({ datapassed }) => {
  const changeddata = useSelector((state) => state.individualData);

  const changed = useSelector((state) => state.changed);
    
  return (
    <>
      <Box boxShadow={6} className="box">
        <>
          {changed ? (
            <>
              {changed && changeddata.latest_data.confirmed > 0 ? (
                <Card className="line__card">
                  <>
                    <Line
                      className="line"
                      data={{
                        labels: ["Confirmed", "Recovered", "Deaths"],
                        datasets: [
                          {
                            label: "Statistics",
                            data: [
                              changeddata.latest_data.confirmed,
                              changeddata.latest_data.recovered,
                              changeddata.latest_data.deaths,
                            
                             
                              
                            ],
                            borderColor: 'rgb(75, 192, 192)',
                               hoverBackgroundColor: [
                              "rgb(204, 153, 255)",
                              "rgb(0,128,0)",
                              "rgb(128,0,0)",
                            ],
                            
                            hoverOffset: 4,
                            tension: 0.1,
                          },
                        ],
                      }}
                    />
                  </>
                </Card>
              ) : null}
            </>
          ) : (
            <>
              {datapassed[0] ? (
                <Card className="line__card">
                  <Line
                  className="line"
                  data={{
                    labels: ["Confirmed", "Recovered", "Deaths"],
                    datasets: [
                      {
                        label: "Statistics",
                        data: [
                          datapassed[0].latest_data.confirmed,
                          datapassed[0].latest_data.recovered,
                          datapassed[0].latest_data.deaths,
                       
                         
                          
                        ],
                           hoverBackgroundColor: [
                              "rgb(204, 153, 255)",
                              "rgb(0,128,0)",
                              "rgb(128,0,0)",
                            ],
                        borderColor: 'rgb(75, 192, 192)',
                        hoverOffset: 4,
                        tension: 0.1
                      },
                    ],
                  }}
                />
                  </Card>
                
              ) : null}
            </>
          )}
        </>
      </Box>
    </>
  );
};

export default Linechart;
