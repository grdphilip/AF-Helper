import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  let url = request.query.url;
  console.log(url);
  try {
    const res = await fetch(url as string);
    const data = await res.json();
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.status(200).json(data);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error retrieving data from API");
  }
}
