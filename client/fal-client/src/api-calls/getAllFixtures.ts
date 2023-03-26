import { Fixture } from "../utils/types";

export async function getAllFixtures(team?: number) {
  let url = "https://fantasy.allsvenskan.se/api/fixtures/";
  if (team) {
    url = url + "?team=" + team.toString();
  }

  return fetch("../../api/handler?url=" + url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      const fixtures: Fixture[] = data;
      return fixtures;
    });
}
