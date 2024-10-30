import type { ClassMap } from "$lib/types";

export const classesMap: ClassMap = {
    0: "Unknown",
    101: "Warrior (Male)",
    102: "Berserker",
    103: "Destroyer",
    104: "Gunlancer",
    105: "Paladin",
    111: "Female Warrior",
    112: "Slayer",
    201: "Mage",
    202: "Arcanist",
    203: "Summoner",
    204: "Bard",
    205: "Sorceress",
    301: "Martial Artist (Female)",
    302: "Wardancer",
    303: "Scrapper",
    304: "Soulfist",
    305: "Glaivier",
    311: "Martial Artist (Male)",
    312: "Striker",
    313: "Breaker",
    401: "Assassin",
    402: "Deathblade",
    403: "Shadowhunter",
    404: "Reaper",
    405: "Souleater",
    501: "Gunner (Male)",
    502: "Sharpshooter",
    503: "Deadeye",
    504: "Artillerist",
    505: "Machinist",
    511: "Gunner (Female)",
    512: "Gunslinger",
    601: "Specialist",
    602: "Artist",
    603: "Aeromancer",
    604: "Alchemist"
};

export const classNameToClassId: { [key: string]: number | undefined } = {
    Unknown: 0,
    "Warrior (Male)": 101,
    Berserker: 102,
    Destroyer: 103,
    Gunlancer: 104,
    Paladin: 105,
    "Female Warrior": 111,
    Slayer: 112,
    Mage: 201,
    Arcanist: 202,
    Summoner: 203,
    Bard: 204,
    Sorceress: 205,
    "Martial Artist (Female)": 301,
    Wardancer: 302,
    Scrapper: 303,
    Soulfist: 304,
    Glaivier: 305,
    "Martial Artist (Male)": 311,
    Striker: 312,
    Breaker: 313,
    Assassin: 401,
    Deathblade: 402,
    Shadowhunter: 403,
    Reaper: 404,
    Souleater: 405,
    "Gunner (Male)": 501,
    Sharpshooter: 502,
    Deadeye: 503,
    Artillerist: 504,
    Machinist: 505,
    "Gunner (Female)": 511,
    Gunslinger: 512,
    Specialist: 601,
    Artist: 602,
    Aeromancer: 603,
    Alchemist: 604
};

export const classList = [
    "Berserker",
    "Destroyer",
    "Gunlancer",
    "Paladin",
    "Slayer",
    "Arcanist",
    "Summoner",
    "Bard",
    "Sorceress",
    "Wardancer",
    "Scrapper",
    "Soulfist",
    "Glaivier",
    "Striker",
    "Breaker",
    "Deathblade",
    "Shadowhunter",
    "Reaper",
    "Souleater",
    "Sharpshooter",
    "Deadeye",
    "Artillerist",
    "Machinist",
    "Gunslinger",
    "Artist",
    "Aeromancer"
];
