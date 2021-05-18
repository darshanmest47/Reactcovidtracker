import React from "react";
import Card from "@material-ui/core/Card";
import "../Displaycards/cardscss/Displaycard1.css";
import { useSelector } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import CountUp from "react-countup";
import Box from "@material-ui/core/Box";

const Displaycard1 = ({ passdata }) => {
  
  const sdata = useSelector((state) => state.individualData);
  
  const changed = useSelector((state) => state.changed);


  // setDataName()

  return (
    <div>
      {changed ? (
        <>
          <Box boxShadow={6}>
            <Card className="display__card1">
              <CardContent>
                <p>
                  <em>Country: {sdata.name}</em>
                </p>
                <p>
                  <em>
                    Population:{" "}
                    <CountUp
                      start={0}
                      end={sdata.population}
                      separator=","
                      duration={3}
                    />
                  </em>
                </p>
                <p>
                  <em>
                    Critical:{" "}
                    <CountUp
                      start={0}
                      end={sdata.latest_data.critical}
                      separator=","
                      duration={3}
                    />
                  </em>
                </p>
              </CardContent>
            </Card>
          </Box>
        </>
      ) : (
        <>
          {passdata[0] ? (
            <>
              <Box boxShadow={6}>
                <Card className="display__card1">
                  <CardContent>
                    <p>
                      <em>Country: {passdata[0].name}</em>
                    </p>
                    <p>
                      <em>
                        Population:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].population}
                          separator=","
                          duration={3}
                        />
                      </em>
                    </p>
                    <p>
                      <em>
                        Critical:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].latest_data.critical}
                          separator=","
                          duration={3}
                        />
                      </em>
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Displaycard1;
