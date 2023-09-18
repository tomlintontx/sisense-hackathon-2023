import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from '@sisense/sdk-data';

export const DataSource = 'nfl';

interface logosDimension extends Dimension {
  team: Attribute;
  team_logo: Attribute;
}
export const logos = createDimension({
  name: 'logos',
  team: createAttribute({
    name: 'team',
    type: 'text-attribute',
    expression: '[logos.team]',
  }),
  team_logo: createAttribute({
    name: 'team_logo',
    type: 'text-attribute',
    expression: '[logos.team_logo]',
  }),
}) as logosDimension;

interface player_imagesDimension extends Dimension {
  full_name: Attribute;
  img_url: Attribute;
}
export const player_images = createDimension({
  name: 'player_images',
  full_name: createAttribute({
    name: 'full_name',
    type: 'text-attribute',
    expression: '[player_images.full_name]',
  }),
  img_url: createAttribute({
    name: 'img_url',
    type: 'text-attribute',
    expression: '[player_images.img_url]',
  }),
}) as player_imagesDimension;

interface player_statsDimension extends Dimension {
  AssistedTackles: Attribute;
  AwayScore: Attribute;
  DefensiveTouchdowns: Attribute;
  ExtraPointsAttempted: Attribute;
  ExtraPointsMade: Attribute;
  FantasyPoints: Attribute;
  FantasyPointsDraftKings: Attribute;
  FantasyPointsFanDuel: Attribute;
  FantasyPointsFantasyDraft: Attribute;
  FantasyPointsHalfPointPpr: Attribute;
  FantasyPointsPerGame: Attribute;
  FantasyPointsPerGameDraftKings: Attribute;
  FantasyPointsPerGameFanDuel: Attribute;
  FantasyPointsPerGameFantasyDraft: Attribute;
  FantasyPointsPerGameHalfPointPPR: Attribute;
  FantasyPointsPerGamePPR: Attribute;
  FantasyPointsPerGameSixPointPassTd: Attribute;
  FantasyPointsPerGameYahoo: Attribute;
  FantasyPointsPPR: Attribute;
  FantasyPointsSixPointPassTd: Attribute;
  FantasyPointsYahoo: Attribute;
  FantasyPosition: Attribute;
  FieldGoalPercentage: Attribute;
  FieldGoalsAttempted: Attribute;
  FieldGoalsLongestMade: Attribute;
  FieldGoalsMade: Attribute;
  FirstName: Attribute;
  Fumbles: Attribute;
  FumblesForced: Attribute;
  FumblesLost: Attribute;
  FumblesRecovered: Attribute;
  GameDate: Attribute;
  GameStatus: Attribute;
  GameStatusClass: Attribute;
  HomeOrAway: Attribute;
  HomeScore: Attribute;
  Interceptions: Attribute;
  IsFavorite: Attribute;
  IsGameOver: Attribute;
  IsScrambled: Attribute;
  LastName: Attribute;
  Name: Attribute;
  Opponent: Attribute;
  PassesDefended: Attribute;
  PassingAttempts: Attribute;
  PassingCompletionPercentage: Attribute;
  PassingCompletions: Attribute;
  PassingInterceptions: Attribute;
  PassingRating: Attribute;
  PassingTouchdowns: Attribute;
  PassingYards: Attribute;
  PassingYardsPerAttempt: Attribute;
  Played: Attribute;
  PlayerID: Attribute;
  PlayerUrlString: Attribute;
  PointsAllowedByDefenseSpecialTeams: Attribute;
  Position: Attribute;
  PositionRank: Attribute;
  Quarter: Attribute;
  QuarterbackHits: Attribute;
  QuarterDisplay: Attribute;
  Rank: Attribute;
  ReceivingLong: Attribute;
  ReceivingTargets: Attribute;
  ReceivingTouchdowns: Attribute;
  ReceivingYards: Attribute;
  ReceivingYardsPerReception: Attribute;
  ReceivingYardsPerTarget: Attribute;
  ReceptionPercentage: Attribute;
  Receptions: Attribute;
  Result: Attribute;
  RushingAttempts: Attribute;
  RushingTouchdowns: Attribute;
  RushingYards: Attribute;
  RushingYardsPerAttempt: Attribute;
  Sacks: Attribute;
  SackYards: Attribute;
  Safeties: Attribute;
  ScoreSummary: Attribute;
  Season: Attribute;
  ShortName: Attribute;
  SoloTackles: Attribute;
  SpecialTeamsTouchdowns: Attribute;
  Started: Attribute;
  StaticRank: Attribute;
  TacklesForLoss: Attribute;
  Team: Attribute;
  TeamHasPossession: Attribute;
  TeamIsHome: Attribute;
  TeamUrlString: Attribute;
  TimeRemaining: Attribute;
  TotalTackles: Attribute;
  UsaTodayHeadshotNoBackgroundUrlSlug: Attribute;
  Week: Attribute;
}
export const player_stats = createDimension({
  name: 'player_stats',
  AssistedTackles: createAttribute({
    name: 'AssistedTackles',
    type: 'numeric-attribute',
    expression: '[player_stats.AssistedTackles]',
  }),
  AwayScore: createAttribute({
    name: 'AwayScore',
    type: 'text-attribute',
    expression: '[player_stats.AwayScore]',
  }),
  DefensiveTouchdowns: createAttribute({
    name: 'DefensiveTouchdowns',
    type: 'numeric-attribute',
    expression: '[player_stats.DefensiveTouchdowns]',
  }),
  ExtraPointsAttempted: createAttribute({
    name: 'ExtraPointsAttempted',
    type: 'numeric-attribute',
    expression: '[player_stats.ExtraPointsAttempted]',
  }),
  ExtraPointsMade: createAttribute({
    name: 'ExtraPointsMade',
    type: 'numeric-attribute',
    expression: '[player_stats.ExtraPointsMade]',
  }),
  FantasyPoints: createAttribute({
    name: 'FantasyPoints',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPoints]',
  }),
  FantasyPointsDraftKings: createAttribute({
    name: 'FantasyPointsDraftKings',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsDraftKings]',
  }),
  FantasyPointsFanDuel: createAttribute({
    name: 'FantasyPointsFanDuel',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsFanDuel]',
  }),
  FantasyPointsFantasyDraft: createAttribute({
    name: 'FantasyPointsFantasyDraft',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsFantasyDraft]',
  }),
  FantasyPointsHalfPointPpr: createAttribute({
    name: 'FantasyPointsHalfPointPpr',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsHalfPointPpr]',
  }),
  FantasyPointsPerGame: createAttribute({
    name: 'FantasyPointsPerGame',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGame]',
  }),
  FantasyPointsPerGameDraftKings: createAttribute({
    name: 'FantasyPointsPerGameDraftKings',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameDraftKings]',
  }),
  FantasyPointsPerGameFanDuel: createAttribute({
    name: 'FantasyPointsPerGameFanDuel',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameFanDuel]',
  }),
  FantasyPointsPerGameFantasyDraft: createAttribute({
    name: 'FantasyPointsPerGameFantasyDraft',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameFantasyDraft]',
  }),
  FantasyPointsPerGameHalfPointPPR: createAttribute({
    name: 'FantasyPointsPerGameHalfPointPPR',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameHalfPointPPR]',
  }),
  FantasyPointsPerGamePPR: createAttribute({
    name: 'FantasyPointsPerGamePPR',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGamePPR]',
  }),
  FantasyPointsPerGameSixPointPassTd: createAttribute({
    name: 'FantasyPointsPerGameSixPointPassTd',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameSixPointPassTd]',
  }),
  FantasyPointsPerGameYahoo: createAttribute({
    name: 'FantasyPointsPerGameYahoo',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPerGameYahoo]',
  }),
  FantasyPointsPPR: createAttribute({
    name: 'FantasyPointsPPR',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsPPR]',
  }),
  FantasyPointsSixPointPassTd: createAttribute({
    name: 'FantasyPointsSixPointPassTd',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsSixPointPassTd]',
  }),
  FantasyPointsYahoo: createAttribute({
    name: 'FantasyPointsYahoo',
    type: 'numeric-attribute',
    expression: '[player_stats.FantasyPointsYahoo]',
  }),
  FantasyPosition: createAttribute({
    name: 'FantasyPosition',
    type: 'text-attribute',
    expression: '[player_stats.FantasyPosition]',
  }),
  FieldGoalPercentage: createAttribute({
    name: 'FieldGoalPercentage',
    type: 'numeric-attribute',
    expression: '[player_stats.FieldGoalPercentage]',
  }),
  FieldGoalsAttempted: createAttribute({
    name: 'FieldGoalsAttempted',
    type: 'numeric-attribute',
    expression: '[player_stats.FieldGoalsAttempted]',
  }),
  FieldGoalsLongestMade: createAttribute({
    name: 'FieldGoalsLongestMade',
    type: 'numeric-attribute',
    expression: '[player_stats.FieldGoalsLongestMade]',
  }),
  FieldGoalsMade: createAttribute({
    name: 'FieldGoalsMade',
    type: 'numeric-attribute',
    expression: '[player_stats.FieldGoalsMade]',
  }),
  FirstName: createAttribute({
    name: 'FirstName',
    type: 'text-attribute',
    expression: '[player_stats.FirstName]',
  }),
  Fumbles: createAttribute({
    name: 'Fumbles',
    type: 'numeric-attribute',
    expression: '[player_stats.Fumbles]',
  }),
  FumblesForced: createAttribute({
    name: 'FumblesForced',
    type: 'numeric-attribute',
    expression: '[player_stats.FumblesForced]',
  }),
  FumblesLost: createAttribute({
    name: 'FumblesLost',
    type: 'numeric-attribute',
    expression: '[player_stats.FumblesLost]',
  }),
  FumblesRecovered: createAttribute({
    name: 'FumblesRecovered',
    type: 'numeric-attribute',
    expression: '[player_stats.FumblesRecovered]',
  }),
  GameDate: createAttribute({
    name: 'GameDate',
    type: 'text-attribute',
    expression: '[player_stats.GameDate]',
  }),
  GameStatus: createAttribute({
    name: 'GameStatus',
    type: 'text-attribute',
    expression: '[player_stats.GameStatus]',
  }),
  GameStatusClass: createAttribute({
    name: 'GameStatusClass',
    type: 'text-attribute',
    expression: '[player_stats.GameStatusClass]',
  }),
  HomeOrAway: createAttribute({
    name: 'HomeOrAway',
    type: 'text-attribute',
    expression: '[player_stats.HomeOrAway]',
  }),
  HomeScore: createAttribute({
    name: 'HomeScore',
    type: 'text-attribute',
    expression: '[player_stats.HomeScore]',
  }),
  Interceptions: createAttribute({
    name: 'Interceptions',
    type: 'numeric-attribute',
    expression: '[player_stats.Interceptions]',
  }),
  IsFavorite: createAttribute({
    name: 'IsFavorite',
    type: 'text-attribute',
    expression: '[player_stats.IsFavorite]',
  }),
  IsGameOver: createAttribute({
    name: 'IsGameOver',
    type: 'text-attribute',
    expression: '[player_stats.IsGameOver]',
  }),
  IsScrambled: createAttribute({
    name: 'IsScrambled',
    type: 'text-attribute',
    expression: '[player_stats.IsScrambled]',
  }),
  LastName: createAttribute({
    name: 'LastName',
    type: 'text-attribute',
    expression: '[player_stats.LastName]',
  }),
  Name: createAttribute({
    name: 'Name',
    type: 'text-attribute',
    expression: '[player_stats.Name]',
  }),
  Opponent: createAttribute({
    name: 'Opponent',
    type: 'text-attribute',
    expression: '[player_stats.Opponent]',
  }),
  PassesDefended: createAttribute({
    name: 'PassesDefended',
    type: 'numeric-attribute',
    expression: '[player_stats.PassesDefended]',
  }),
  PassingAttempts: createAttribute({
    name: 'PassingAttempts',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingAttempts]',
  }),
  PassingCompletionPercentage: createAttribute({
    name: 'PassingCompletionPercentage',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingCompletionPercentage]',
  }),
  PassingCompletions: createAttribute({
    name: 'PassingCompletions',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingCompletions]',
  }),
  PassingInterceptions: createAttribute({
    name: 'PassingInterceptions',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingInterceptions]',
  }),
  PassingRating: createAttribute({
    name: 'PassingRating',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingRating]',
  }),
  PassingTouchdowns: createAttribute({
    name: 'PassingTouchdowns',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingTouchdowns]',
  }),
  PassingYards: createAttribute({
    name: 'PassingYards',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingYards]',
  }),
  PassingYardsPerAttempt: createAttribute({
    name: 'PassingYardsPerAttempt',
    type: 'numeric-attribute',
    expression: '[player_stats.PassingYardsPerAttempt]',
  }),
  Played: createAttribute({
    name: 'Played',
    type: 'numeric-attribute',
    expression: '[player_stats.Played]',
  }),
  PlayerID: createAttribute({
    name: 'PlayerID',
    type: 'numeric-attribute',
    expression: '[player_stats.PlayerID]',
  }),
  PlayerUrlString: createAttribute({
    name: 'PlayerUrlString',
    type: 'text-attribute',
    expression: '[player_stats.PlayerUrlString]',
  }),
  PointsAllowedByDefenseSpecialTeams: createAttribute({
    name: 'PointsAllowedByDefenseSpecialTeams',
    type: 'numeric-attribute',
    expression: '[player_stats.PointsAllowedByDefenseSpecialTeams]',
  }),
  Position: createAttribute({
    name: 'Position',
    type: 'text-attribute',
    expression: '[player_stats.Position]',
  }),
  PositionRank: createAttribute({
    name: 'PositionRank',
    type: 'text-attribute',
    expression: '[player_stats.PositionRank]',
  }),
  Quarter: createAttribute({
    name: 'Quarter',
    type: 'text-attribute',
    expression: '[player_stats.Quarter]',
  }),
  QuarterbackHits: createAttribute({
    name: 'QuarterbackHits',
    type: 'numeric-attribute',
    expression: '[player_stats.QuarterbackHits]',
  }),
  QuarterDisplay: createAttribute({
    name: 'QuarterDisplay',
    type: 'text-attribute',
    expression: '[player_stats.QuarterDisplay]',
  }),
  Rank: createAttribute({
    name: 'Rank',
    type: 'numeric-attribute',
    expression: '[player_stats.Rank]',
  }),
  ReceivingLong: createAttribute({
    name: 'ReceivingLong',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingLong]',
  }),
  ReceivingTargets: createAttribute({
    name: 'ReceivingTargets',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingTargets]',
  }),
  ReceivingTouchdowns: createAttribute({
    name: 'ReceivingTouchdowns',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingTouchdowns]',
  }),
  ReceivingYards: createAttribute({
    name: 'ReceivingYards',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingYards]',
  }),
  ReceivingYardsPerReception: createAttribute({
    name: 'ReceivingYardsPerReception',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingYardsPerReception]',
  }),
  ReceivingYardsPerTarget: createAttribute({
    name: 'ReceivingYardsPerTarget',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceivingYardsPerTarget]',
  }),
  ReceptionPercentage: createAttribute({
    name: 'ReceptionPercentage',
    type: 'numeric-attribute',
    expression: '[player_stats.ReceptionPercentage]',
  }),
  Receptions: createAttribute({
    name: 'Receptions',
    type: 'numeric-attribute',
    expression: '[player_stats.Receptions]',
  }),
  Result: createAttribute({
    name: 'Result',
    type: 'text-attribute',
    expression: '[player_stats.Result]',
  }),
  RushingAttempts: createAttribute({
    name: 'RushingAttempts',
    type: 'numeric-attribute',
    expression: '[player_stats.RushingAttempts]',
  }),
  RushingTouchdowns: createAttribute({
    name: 'RushingTouchdowns',
    type: 'numeric-attribute',
    expression: '[player_stats.RushingTouchdowns]',
  }),
  RushingYards: createAttribute({
    name: 'RushingYards',
    type: 'numeric-attribute',
    expression: '[player_stats.RushingYards]',
  }),
  RushingYardsPerAttempt: createAttribute({
    name: 'RushingYardsPerAttempt',
    type: 'numeric-attribute',
    expression: '[player_stats.RushingYardsPerAttempt]',
  }),
  Sacks: createAttribute({
    name: 'Sacks',
    type: 'numeric-attribute',
    expression: '[player_stats.Sacks]',
  }),
  SackYards: createAttribute({
    name: 'SackYards',
    type: 'numeric-attribute',
    expression: '[player_stats.SackYards]',
  }),
  Safeties: createAttribute({
    name: 'Safeties',
    type: 'numeric-attribute',
    expression: '[player_stats.Safeties]',
  }),
  ScoreSummary: createAttribute({
    name: 'ScoreSummary',
    type: 'text-attribute',
    expression: '[player_stats.ScoreSummary]',
  }),
  Season: createAttribute({
    name: 'Season',
    type: 'text-attribute',
    expression: '[player_stats.Season]',
  }),
  ShortName: createAttribute({
    name: 'ShortName',
    type: 'text-attribute',
    expression: '[player_stats.ShortName]',
  }),
  SoloTackles: createAttribute({
    name: 'SoloTackles',
    type: 'numeric-attribute',
    expression: '[player_stats.SoloTackles]',
  }),
  SpecialTeamsTouchdowns: createAttribute({
    name: 'SpecialTeamsTouchdowns',
    type: 'numeric-attribute',
    expression: '[player_stats.SpecialTeamsTouchdowns]',
  }),
  Started: createAttribute({
    name: 'Started',
    type: 'numeric-attribute',
    expression: '[player_stats.Started]',
  }),
  StaticRank: createAttribute({
    name: 'StaticRank',
    type: 'numeric-attribute',
    expression: '[player_stats.StaticRank]',
  }),
  TacklesForLoss: createAttribute({
    name: 'TacklesForLoss',
    type: 'numeric-attribute',
    expression: '[player_stats.TacklesForLoss]',
  }),
  Team: createAttribute({
    name: 'Team',
    type: 'text-attribute',
    expression: '[player_stats.Team]',
  }),
  TeamHasPossession: createAttribute({
    name: 'TeamHasPossession',
    type: 'text-attribute',
    expression: '[player_stats.TeamHasPossession]',
  }),
  TeamIsHome: createAttribute({
    name: 'TeamIsHome',
    type: 'text-attribute',
    expression: '[player_stats.TeamIsHome]',
  }),
  TeamUrlString: createAttribute({
    name: 'TeamUrlString',
    type: 'text-attribute',
    expression: '[player_stats.TeamUrlString]',
  }),
  TimeRemaining: createAttribute({
    name: 'TimeRemaining',
    type: 'text-attribute',
    expression: '[player_stats.TimeRemaining]',
  }),
  TotalTackles: createAttribute({
    name: 'TotalTackles',
    type: 'numeric-attribute',
    expression: '[player_stats.TotalTackles]',
  }),
  UsaTodayHeadshotNoBackgroundUrlSlug: createAttribute({
    name: 'UsaTodayHeadshotNoBackgroundUrlSlug',
    type: 'text-attribute',
    expression: '[player_stats.UsaTodayHeadshotNoBackgroundUrlSlug]',
  }),
  Week: createAttribute({
    name: 'Week',
    type: 'text-attribute',
    expression: '[player_stats.Week]',
  }),
}) as player_statsDimension;

interface teamcolorsDimension extends Dimension {
  color: Attribute;
  color2: Attribute;
  color3: Attribute;
  color4: Attribute;
  team: Attribute;
}
export const teamcolors = createDimension({
  name: 'teamcolors',
  color: createAttribute({
    name: 'color',
    type: 'text-attribute',
    expression: '[teamcolors.color]',
  }),
  color2: createAttribute({
    name: 'color2',
    type: 'text-attribute',
    expression: '[teamcolors.color2]',
  }),
  color3: createAttribute({
    name: 'color3',
    type: 'text-attribute',
    expression: '[teamcolors.color3]',
  }),
  color4: createAttribute({
    name: 'color4',
    type: 'text-attribute',
    expression: '[teamcolors.color4]',
  }),
  team: createAttribute({
    name: 'team',
    type: 'text-attribute',
    expression: '[teamcolors.team]',
  }),
}) as teamcolorsDimension;
