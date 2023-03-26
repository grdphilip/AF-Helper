import { Fixture } from "../utils/types";

export async function getRound(round?: number) {
  let url = "https://fantasy.allsvenskan.se/api/fixtures/";
  if (round) {
    url = url + "?event=" + round.toString();
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
