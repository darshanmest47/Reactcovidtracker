import React from "react";
import Card from "@material-ui/core/Card";
import "../Displaycards/cardscss/Displaycard3.css";
import { useSelector } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import CountUp from "react-countup";
import Box from "@material-ui/core/Box";

const Displaycard3 = ({ passdata }) => {
  
  const sdata = useSelector((state) => state.individualData);
 
  const changed = useSelector((state) => state.changed);


  return (
    <div>
      {changed ? (
        <>
          <Box boxShadow={6}>
            
            <Card className="display__card2">
              <CardContent>
                <p>
                  <em>Updated: {sdata.updated_at}</em>
                </p>
                <p>
                  <em>
                    Today's Deaths:{" "}
                    <CountUp start={0} end={sdata.today.deaths} separator="," />
                  </em>
                </p>
                <p>
                  <em>
                    Today's Confirms:{" "}
                    <CountUp
                      start={0}
                      end={sdata.today.confirmed}
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
                      <em>Updated: {passdata[0].updated_at}</em>
                    </p>
                    <p>
                      <em>
                        Today's Deaths:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].today.deaths}
                          separator=","
                        />
                      </em>
                    </p>
                    <p>
                      <em>
                        Today's Confirms:{" "}
                        <CountUp
                          start={0}
                          end={passdata[0].today.confirmed}
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

export default Displaycard3;
