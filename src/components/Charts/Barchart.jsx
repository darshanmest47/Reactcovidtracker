import React from 'react'
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import "./chartscss/Bar.css";

const Barchart = ({datapassed}) => {
    const changeddata = useSelector((state) => state.individualData);

    const changed = useSelector((state) => state.changed);
    return (
        <>
        <Box boxShadow={6} className="boxbar">
          <>
            {changed ? (
              <>
                {changed && changeddata.latest_data.confirmed > 0 ? (
                  <Card className="bar__card">
                    <>
                      <Bar
                        className="bar"
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
                              backgroundColor: [
                                'rgba(54, 162, 235)',
                                "rgba(201, 203, 207)",
                                "rgba(255, 205, 86)",
                              ],
                                 hoverBackgroundColor: [
                              "rgb(204, 153, 255)",
                              "rgb(0,128,0)",
                              "rgb(128,0,0)",
                            ],
                              hoverOffset: 4,
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
                    <Card className="bar__card">
                          <Bar
                    className="bar"
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
                          backgroundColor: [
                            'rgba(54, 162, 235)',
                            "rgba(201, 203, 207)",
                            "rgba(255, 205, 86)",
                          ],
                             hoverBackgroundColor: [
                              "rgb(204, 153, 255)",
                              "rgb(0,128,0)",
                              "rgb(128,0,0)",
                            ],
                          hoverOffset: 4,
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
    )
}

export default Barchart
