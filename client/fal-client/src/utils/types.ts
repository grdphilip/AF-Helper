export type Manager = {
  current_event: null;
  favourite_team: number;
  id: number;
  joined_time: string;
  kit: null;
  last_deadline_bank: number | null;
  last_deadline_total_transfers: number;
  last_deadline_value: number | null;
  leagues: {
    classic: ClassicLeague[]
  }
  name: string;
  name_change_blocked: boolean;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_iso_code_long: string;
  player_region_iso_code_short: string;
  player_region_name: string;
  started_event: number;
  summary_event_points: number | null;
  summary_event_rank: number | null;
  summary_overall_points: number | null;
  summary_overall_rank: number | null;
}

export type ClassicLeague = {
  admin_entry: null
  closed: boolean
  created: string
  cup_league: null
  cup_qualified: null
  entry_can_admin: boolean
  entry_can_invite: boolean
  entry_can_leave: boolean
  entry_last_rank: number
  entry_rank: number
  has_cup: boolean
  id: number
  league_type: string
  max_entries: null
  name: string
  rank: number | null
  scoring: string
  short_name: string
  start_event: number
}

export type LeagueTeam = {
  entry: number;
  entry_name: string;
  joined_time: string;
  player_first_name: string;
  player_last_name: string;
}

export type NewEntries = {
  has_next: boolean;
  page: number;
  results: LeagueTeam[];
}

export type LeagueInformation = {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries: null;
  league_type: string;
  scoring: string;
  admin_entry: number;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league: null;
  rank: null;
}

export type Standings = {
  has_next: boolean;
  page: number;
  results: any[]; // Not enough information to create a specific type.
}

export type League = {
  new_entries: NewEntries;
  last_updated_data: null;
  league: LeagueInformation;
  standings: Standings;
}

export type Fixture = {
  code: number
  event: number
  finished: boolean
  finished_provisional: boolean
  id: number
  kickoff_time: string
  minutes: number
  provisional_start_time: boolean
  started: boolean
  team_a: number
  team_a_score: number | null
  team_h: number
  team_h_score: number | null
  stats: any[]
}

export type Team = {
  code: number
  draw: number
  form: string | null
  id: number
  loss: number
  name: string
  played: number
  points: number
  position: number
  short_name: string
  strength: string | null
  team_division: string | null
  unavailable: boolean
  win: number
}