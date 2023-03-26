import { Manager } from "../utils/types";

export default async function getManagerInformation(teamid: string) {
  const url = "https://fantasy.allsvenskan.se/api/entry/" + teamid;

  return fetch("../../api/handler?url=" + url)
    .then((response) => response.json())
    .then((data) => {
      const manager: Manager = data;
      return manager;
    });
}
