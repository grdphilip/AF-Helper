import { atom } from "recoil";
import { Manager } from "./types";

export const manager = atom({
  key: "manager",
  default: <Manager>{},
});
