import React from "react";
import Card from "@material-ui/core/Card";
import "../Displaycards/cardscss/Displaycard2.css";
import { useSelector } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import CountUp from "react-countup";
import Box from "@material-ui/core/Box";

const Displaycard2 = ({ passdata }) => {
  
  const sdata = useSelector((state) => state.individualData);

  const changed = useSelector((state) => state.changed);
 

  // setDataName()

  return (
    <div>
      {changed ? (
        <>
          <Box boxShadow={6}>
            <Card className="display__card2">
              <CardContent>
                <p>
                  <em>
                    Confirmed:{" "}
                    <CountUp
                      start={0}
                      end={sdata.latest_data.confirmed}
                      separator=","
                    />
                  </em>
                </p>
                <p>
                  <em>
                    Recovered:{" "}
                    <CountUp
                      start={0}
                      end={sdata.latest_data.recovered}
                      separator=","
                    />
                  </em>
                </p>
                <p>
                  <em>
                    Deaths:{" "}
                    <CountUp
                      start={0}
                      end={sdata.latest_data.deaths}
                      separator=","
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
                <Card className="display__card2">
                  <CardContent>
                    <p>
                      <em>
                        Confirmed:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].latest_data.confirmed}
                          separator=","
                        />
                      </em>
                    </p>
                    <p>
                      <em>
                        Recovered:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].latest_data.recovered}
                          separator=","
                        />
                      </em>
                    </p>
                    <p>
                      <em>
                        Deaths:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].latest_data.deaths}
                          separator=","
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

export default Displaycard2;
