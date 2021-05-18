import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector} from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import "./chartscss/Doughnutchart.css";


const Doughnutchart = ({ datapassed }) => {
  const changeddata = useSelector((state) => state.individualData);

  const changed = useSelector((state) => state.changed);


  return (
    <>
      <Box boxShadow={6} className="box">
        <>
          {changed ? (
            <>
              {changeddata.latest_data.confirmed > 0 ? (
                
                <Card className="doughnut__card">
                  <>
                    <Doughnut
                      className="doughnut"
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
                              "rgb(0, 204, 255)",
                              "rgb(51,153,102)",
                              "rgb(255,0,0)",
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
              ) : (null)}
            </>
          ) : (
            <>
              {datapassed[0] ? (
                <Card className="doughnut__card">
                  <Doughnut
                    className="doughnut"
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
                            "rgb(0, 204, 255)",
                            "rgb(51,153,102)",
                            "rgb(255,0,0)",
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
              ) : (null)}
            </>
          )}
        </>
      </Box>
    </>
  );
};

export default Doughnutchart;
