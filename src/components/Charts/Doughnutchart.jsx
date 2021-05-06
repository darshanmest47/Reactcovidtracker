import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";

const Doughnutchart = ({ datapassed }) => {

  const changeddata = useSelector((state) => state.individualData);


  const changed = useSelector((state) => state.changed);
  return (
    <Card>
      {changed ? (
        <Doughnut
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
                  "rgb(255, 99, 132)",
                  "rgb(34,139,34)",
                  "rgb(0,0,205)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      ) : (
        <>
          {datapassed[0] ? (
            <Doughnut 
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
                      "rgb(255, 99, 132)",
                      "rgb(34,139,34)",
                      "rgb(0,0,205)",
                    ],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          ) : null}
        </>
      )}
    </Card>
  );
};

export default Doughnutchart;
