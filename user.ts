type UserInfo = {
  id: number;
  name: string;
  email?: string; // Optional info
};

const userx = {
  id: 1,
  name: "iaurg",
  email: "iaurg@segredo.dev",
};

type CharInfo = {
  id: number;
  nickname: string;
  level: number;
  race: "Human" | "Orc" | "Elf";
};

const charx = {
  id: 1,
  nickname: "blooderburg",
  level: 12,
  race: "Human",
};

type PlayerInfo = UserInfo & CharInfo;

const playerx = {
  id: 1,
  nickname: "blooderburg",
  level: 12,
  race: "Human",
  name: "iaurg",
};
