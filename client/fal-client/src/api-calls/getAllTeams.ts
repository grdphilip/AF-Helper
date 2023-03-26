import { Team } from "../utils/types";

export async function getTeams() {
  let url = "https://fantasy.allsvenskan.se/api/bootstrap-static/";

  return fetch("../../api/handler?url=" + url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      const teams: Team[] = data.teams;
      return teams;
    });
}
