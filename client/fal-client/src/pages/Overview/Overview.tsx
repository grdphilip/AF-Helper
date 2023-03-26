import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Overview.css";
import getManagerInformation from "../../api-calls/getManager";
import { Manager } from "../../utils/types";
import { useEffect } from "react";
import { useState } from "react";
import OverviewStandings from "../../components/Overview/OverviewStandings";
import UpcomingRound from "../../components/Overview/UpcomingRound";
import { useRecoilState } from "recoil";
import { manager } from "../../utils/atoms";
import BounceLoader from "react-spinners/BounceLoader";

const Overview = () => {
  const [loading, setLoading] = useState(true);

  const id = "360";

  const [currentManager, setCurrentManager] = useRecoilState(manager);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="textbox">
        <h1>
          Välkommen tillbaka, {currentManager?.player_first_name}{" "}
          {currentManager?.player_last_name}{" "}
        </h1>
        <h4>
          Nedan finner du statistik på hur din liga går för tillfället, hur
          mycket<br></br>
          edge du har mot andra lag samt kommande omgångar!
        </h4>
      </div>
      <section id="information">
        <article>
          <OverviewStandings></OverviewStandings>
        </article>
        <article>
          <BounceLoader color="#EFEFFF"></BounceLoader>
        </article>
        <article>
          <BounceLoader color="#EFEFFF"></BounceLoader>
        </article>
        <article>{/* <!--><UpcomingRound></UpcomingRound> */}</article>
      </section>
    </div>
  );
};

export default Overview;
