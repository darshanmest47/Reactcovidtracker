import React from "react";
import { PolarArea} from "react-chartjs-2";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import "./chartscss/Polararea.css";

const Polararea = ({ datapassed }) => {
  const changeddata = useSelector((state) => state.individualData);

  const changed = useSelector((state) => state.changed);
  return (
    <>
    <Box boxShadow={6} className="box">
      <>
        {changed ? (
          <>
            {changed && changeddata.latest_data.confirmed > 0 ? (
              <Card className="polar__card">
                <>
                  <PolarArea
                    className="polar"
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
                            "rgb(255, 175, 61) ",
                            "rgb(131, 193, 176)",
                            "rgb(255, 157, 133)",
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
              <PolarArea
                className="pie"
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
                        "rgb(255, 175, 61) ",
                        "rgb(131, 193, 176)",
                        "rgb(255, 157, 133)", 
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
            ) : null}
          </>
        )}
      </>
    </Box>
  </>
  );
};

export default Polararea;
