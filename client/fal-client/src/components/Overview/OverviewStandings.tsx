import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { manager } from "../../utils/atoms";
import { League } from "../../utils/types";
import "./OverviewStandings.css";
import { NewEntries } from "../../utils/types";

const OverviewStandings = () => {
  const [standings, setStandings] = useState<NewEntries>();
  const [currentManager, setCurrentManager] = useRecoilState(manager);

  const showLeagueOptions = () => {
    for (let i = 0; i < 6; i++) {
      console.log(currentManager.leagues.classic[i].name);
    }
  };

  const showTeamsInLeague = () => {
    standings?.results?.map((result) => {
      console.log(result.entry_name);
    });
  };

  useEffect(() => {
    async function fetchStandings() {
      try {
        console.log(currentManager.leagues.classic[0]);
        const response = await fetch(
          "../../api/handler?url=" +
            `https://fantasy.allsvenskan.se/api/leagues-classic/${currentManager.leagues.classic[5].id}/standings`
        );
        const data: League = await response.json();
        console.log(data);
        setStandings(data.new_entries);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStandings();
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: "10%", marginLeft: "10%" }}>LigaName</h1>
      <h3 onClick={showTeamsInLeague}>Välj liga</h3>
      <div className="stylingTable">
        <table>
          <thead>
            <tr>
              <th>Lagnamn</th>
              <th style={{ textAlign: "right" }}>Poäng</th>
            </tr>
          </thead>
          <tbody>
            {standings?.results?.map((result, index) => (
              <tr key={index}>
                <td>{result.entry_name}</td>
                <td style={{ textAlign: "right" }}> N/A </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewStandings;
