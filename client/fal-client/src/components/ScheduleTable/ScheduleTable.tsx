import "./ScheduleTable.css";
import teamRatings from "../../utils/team-ratings.json";
import { useEffect, useState } from "react";
import { getAllFixtures } from "../../api-calls/getAllFixtures";
import { Fixture, Team } from "../../utils/types";
import { getTeams } from "../../api-calls/getAllTeams";

const ScheduleTable = () => {
  const initialGameweeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const [allFixtures, setAllFixtures] = useState<Fixture[]>();
  const [allTeams, setAllTeams] = useState<Team[]>();
  const [gameweeks, setGameweeks] = useState(initialGameweeks.slice(0, 10));
  const [currentGameweeks, setCurrentGameweeks] = useState([0, 10]);
  // const [amountOfGameweeks, setAmountOfGameweeks] = useState(10)

  const difficultyColors = [
    "#CDFFCC",
    "#ECFFCC",
    "#FEFFCC",
    "#FFE4CC",
    "#FFCCCC",
  ];

  // const updateAmountOfGameweeks = (event: any) => {
  //     setAmountOfGameweeks(event.target.value)
  //     setCurrentGameweeks([0, event.target.value])
  //     setGameweeks(initialGameweeks.slice(0, event.target.value))
  // }

  useEffect(() => {
    fetchFixtures();
    fetchTeams();
  }, []);

  async function fetchTeams() {
    const teams = await getTeams();
    setAllTeams(teams);
  }

  async function fetchFixtures() {
    const fixtures = await getAllFixtures();
    setAllFixtures(fixtures);
  }

  function getDifficultyColor(id: number) {
    const rating = teamRatings.find((team) => team.id === id)?.rating;
    if (rating !== undefined) {
      return difficultyColors[rating - 1];
    }
    return difficultyColors[2];
  }

  function nextRound() {
    if (currentGameweeks[1] !== 30) {
      setGameweeks(
        initialGameweeks.slice(currentGameweeks[0] + 1, currentGameweeks[1] + 1)
      );
      const newGWs = [currentGameweeks[0] + 1, currentGameweeks[1] + 1];
      setCurrentGameweeks(newGWs);
    }
  }

  function previousRound() {
    setGameweeks(
      initialGameweeks.slice(currentGameweeks[0] - 1, currentGameweeks[1] - 1)
    );
    const newGWs = [currentGameweeks[0] - 1, currentGameweeks[1] - 1];
    setCurrentGameweeks(newGWs);
  }

  return (
    <div className="schedule-container">
      <div className="space-around-row">
        <div>
          <h2>Spelschema</h2>
        </div>
        {/* <div style={{ display: 'flex', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 className='round-button'>Visa antal omgångar: </h3>
                    <select className='round-select' value={amountOfGameweeks} onChange={updateAmountOfGameweeks}>
                        <option value={10}>10</option>
                        <option value={9}>9</option>
                        <option value={8}>8</option>
                    </select>
                </div> */}
        <div style={{ display: "flex" }}>
          {currentGameweeks[0] !== 0 ? (
            <h3
              className="round-button pointer underline"
              onClick={() => previousRound()}
            >
              Föregående omgång
            </h3>
          ) : null}
          <h3
            className="round-button pointer underline"
            onClick={() => nextRound()}
          >
            Nästa omgång
          </h3>
        </div>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <td key={0}></td>
            {gameweeks.map((gameweek) => (
              <th className="fixture-cell" key={gameweek} align={"center"}>
                {gameweek}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamRatings.map((teamRating) => (
            <tr key={teamRating.id} className="team-row">
              <td className="teamname-cell">
                {allTeams?.find((team) => team.id == teamRating.id)?.name}
              </td>
              {gameweeks.map((gameweek) => (
                <td key={gameweek + teamRating.id}>
                  <table style={{ padding: "0", margin: "0" }}>
                    <tbody style={{ padding: "0", margin: "0" }}>
                      <tr style={{ padding: "0", margin: "0" }}>
                        {allFixtures
                          ?.filter(
                            (fixture) =>
                              fixture.event === gameweek &&
                              (fixture.team_h === teamRating.id ||
                                fixture.team_a === teamRating.id)
                          )
                          .map((game) =>
                            game.team_h === teamRating.id ? (
                              <td
                                className="fixture-cell"
                                key={game.code}
                                align={"center"}
                                style={{
                                  backgroundColor: getDifficultyColor(
                                    game.team_a
                                  ),
                                }}
                              >
                                {
                                  allTeams?.find(
                                    (opponent) => opponent.id === game.team_a
                                  )?.short_name
                                }
                                (H)
                              </td>
                            ) : game.team_a === teamRating.id ? (
                              <td
                                className="fixture-cell"
                                key={game.code}
                                align={"center"}
                                style={{
                                  backgroundColor: getDifficultyColor(
                                    game.team_h
                                  ),
                                }}
                              >
                                {
                                  allTeams?.find(
                                    (opponent) => opponent.id === game.team_h
                                  )?.short_name
                                }
                                (A)
                              </td>
                            ) : null
                          )}
                      </tr>
                    </tbody>
                  </table>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
