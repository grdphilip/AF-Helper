import React, { useEffect, useState } from "react";
import { getRound } from "../../api-calls/getRound";
import { getTeams } from "../../api-calls/getAllTeams";
import { Team, Fixture } from "../../utils/types";
import "./UpcomingRound.css";

const UpcomingRound = () => {
  const [allTeams, setAllTeams] = useState<Team[]>([]);
  const [round, setRound] = useState<Fixture[]>([]);
  const [roundNumber, setRoundNumber] = useState(1);

  const incrementRound = () => {
    setRoundNumber((prevRoundNumber) => prevRoundNumber + 1);
  };

  const decrementRound = () => {
    setRoundNumber((prevRoundNumber) => Math.max(prevRoundNumber - 1, 1));
  };

  const fetchRound = async () => {
    try {
      const fixtures = await getRound(roundNumber);
      setRound(fixtures);
    } catch (error) {
      console.error(error);
    }

  const fetchTeams = async () => {
    const teams = await getTeams();
    setAllTeams(teams);
  };
  
    function convertDateTime(dateTime: string): string {
        const date = new Date(dateTime);
        const options: Intl.DateTimeFormatOptions = {
            /*year: "numeric",*/
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: "Europe/Stockholm",
        };
        const formatter = new Intl.DateTimeFormat("sv-SE", options);
        return formatter.format(date);
    }

    useEffect(() => {
        fetchRound();
        fetchTeams();
    }, [roundNumber]);

    return (
        <div className="properties">
            <div className="top-content-box">
                <div>
                    <h1>Omgång {round[0]?.event}</h1>
                </div>
            </div>
            <div className="stylingRound">
                <table>
                    <tbody>
                        {round.map((game) => (
                            <tr key={game.id}>
                                <th> 
                                    <div className={game.finished ? "TeamGreen" : "TeamPurple"}>
                                        <p>{allTeams.find((team) => team.id === game.team_h)?.name}</p>
                                    </div>
                                </th>
                                <th>{convertDateTime(game.kickoff_time)}
                                </th>
                                <th>
                                    <div className={game.finished ? "TeamGreen" : "TeamPurple"}>
                                        <p>{allTeams.find((team) => team.id === game.team_a)?.name}</p>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="backandforth">
                <p onClick={decrementRound}>{'<  '} Föregående </p>
                <p onClick={incrementRound}>Nästa omgång{'  >'}</p>
            </div>
            <div className="section2"></div>
        </div>
      </div>
      <div className="stylingRound">
        <table>
          <tbody>
            {round.map((game) => (
              <tr key={game.id}>
                <th>
                  <div className="HomeTeam">
                    <p>
                      {allTeams.find((team) => team.id === game.team_h)?.name}
                    </p>
                  </div>
                </th>
                <th>
                  <p>vs</p>
                </th>
                <th>
                  <div className="HomeTeam">
                    <p>
                      {allTeams.find((team) => team.id === game.team_a)?.name}
                    </p>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="backandforth">
        <p onClick={decrementRound}>{"<  "} Föregående </p>
        <p onClick={incrementRound}>Nästa omgång{"  >"}</p>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default UpcomingRound;
