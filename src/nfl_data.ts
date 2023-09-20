import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from '@sisense/sdk-data';

export const DataSource = 'nfl';

interface playersDimension extends Dimension {
  active: Attribute;
  age: Attribute;
  debutYear: Attribute;
  displayBirthPlace: Attribute;
  displayDraft: Attribute;
  displayExperience: Attribute;
  displayHeight: Attribute;
  displayJersey: Attribute;
  displayName: Attribute;
  displayWeight: Attribute;
  firstName: Attribute;
  fullName: Attribute;
  hand: Attribute;
  headshot: Attribute;
  players_id: Attribute;
  injuries: Attribute;
  jersey: Attribute;
  lastName: Attribute;
  position: Attribute;
  position_abbr: Attribute;
  statsSummary: Attribute;
  status: Attribute;
  team: Attribute;
  team_id: Attribute;
  players_type: Attribute;
  displayDOB: DateDimension;
}
export const players = createDimension({
  name: 'players',
  active: createAttribute({
    name: 'active',
    type: 'text-attribute',
    expression: '[players.active]',
  }),
  age: createAttribute({
    name: 'age',
    type: 'numeric-attribute',
    expression: '[players.age]',
  }),
  debutYear: createAttribute({
    name: 'debutYear',
    type: 'numeric-attribute',
    expression: '[players.debutYear]',
  }),
  displayBirthPlace: createAttribute({
    name: 'displayBirthPlace',
    type: 'text-attribute',
    expression: '[players.displayBirthPlace]',
  }),
  displayDraft: createAttribute({
    name: 'displayDraft',
    type: 'text-attribute',
    expression: '[players.displayDraft]',
  }),
  displayExperience: createAttribute({
    name: 'displayExperience',
    type: 'text-attribute',
    expression: '[players.displayExperience]',
  }),
  displayHeight: createAttribute({
    name: 'displayHeight',
    type: 'text-attribute',
    expression: '[players.displayHeight]',
  }),
  displayJersey: createAttribute({
    name: 'displayJersey',
    type: 'text-attribute',
    expression: '[players.displayJersey]',
  }),
  displayName: createAttribute({
    name: 'displayName',
    type: 'text-attribute',
    expression: '[players.displayName]',
  }),
  displayWeight: createAttribute({
    name: 'displayWeight',
    type: 'text-attribute',
    expression: '[players.displayWeight]',
  }),
  firstName: createAttribute({
    name: 'firstName',
    type: 'text-attribute',
    expression: '[players.firstName]',
  }),
  fullName: createAttribute({
    name: 'fullName',
    type: 'text-attribute',
    expression: '[players.fullName]',
  }),
  hand: createAttribute({
    name: 'hand',
    type: 'text-attribute',
    expression: '[players.hand]',
  }),
  headshot: createAttribute({
    name: 'headshot',
    type: 'text-attribute',
    expression: '[players.headshot]',
  }),
  players_id: createAttribute({
    name: 'players_id',
    type: 'numeric-attribute',
    expression: '[players.id]',
  }),
  injuries: createAttribute({
    name: 'injuries',
    type: 'text-attribute',
    expression: '[players.injuries]',
  }),
  jersey: createAttribute({
    name: 'jersey',
    type: 'numeric-attribute',
    expression: '[players.jersey]',
  }),
  lastName: createAttribute({
    name: 'lastName',
    type: 'text-attribute',
    expression: '[players.lastName]',
  }),
  position: createAttribute({
    name: 'position',
    type: 'text-attribute',
    expression: '[players.position]',
  }),
  position_abbr: createAttribute({
    name: 'position_abbr',
    type: 'text-attribute',
    expression: '[players.position_abbr]',
  }),
  statsSummary: createAttribute({
    name: 'statsSummary',
    type: 'text-attribute',
    expression: '[players.statsSummary]',
  }),
  status: createAttribute({
    name: 'status',
    type: 'text-attribute',
    expression: '[players.status]',
  }),
  team: createAttribute({
    name: 'team',
    type: 'text-attribute',
    expression: '[players.team]',
  }),
  team_id: createAttribute({
    name: 'team_id',
    type: 'numeric-attribute',
    expression: '[players.team_id]',
  }),
  players_type: createAttribute({
    name: 'players_type',
    type: 'text-attribute',
    expression: '[players.type]',
  }),
  displayDOB: createDateDimension({
    name: 'displayDOB',
    expression: '[players.displayDOB (Calendar)]',
  }),
}) as playersDimension;

interface PlayerStatsDimension extends Dimension {
  assistTackles: Attribute;
  avgGain: Attribute;
  avgInterceptionYards: Attribute;
  avgKickoffReturnYards: Attribute;
  avgKickoffYards: Attribute;
  avgPuntReturnYards: Attribute;
  avgSackYards: Attribute;
  avgStuffYards: Attribute;
  blockedFieldGoalTouchdowns: Attribute;
  blockedPuntTouchdowns: Attribute;
  completionPct: Attribute;
  completions: Attribute;
  defensiveFumblesTouchdowns: Attribute;
  defensivePoints: Attribute;
  defensiveTouchdowns: Attribute;
  defFumbleReturns: Attribute;
  defFumbleReturnYards: Attribute;
  ESPNQBRating: Attribute;
  ESPNRBRating: Attribute;
  ESPNWRRating: Attribute;
  extraPointAttempts: Attribute;
  extraPointPct: Attribute;
  extraPointsBlocked: Attribute;
  extraPointsBlockedPct: Attribute;
  extraPointsMade: Attribute;
  fairCatches: Attribute;
  fairCatchPct: Attribute;
  fieldGoalAttempts: Attribute;
  fieldGoalAttempts1_19: Attribute;
  fieldGoalAttempts20_29: Attribute;
  fieldGoalAttempts30_39: Attribute;
  fieldGoalAttempts40_49: Attribute;
  fieldGoalAttempts50: Attribute;
  fieldGoalAttemptYards: Attribute;
  fieldGoalPct: Attribute;
  fieldGoals: Attribute;
  fieldGoalsBlocked: Attribute;
  fieldGoalsBlockedPct: Attribute;
  fieldGoalsMade: Attribute;
  fieldGoalsMade1_19: Attribute;
  fieldGoalsMade20_29: Attribute;
  fieldGoalsMade30_39: Attribute;
  fieldGoalsMade40_49: Attribute;
  fieldGoalsMade50: Attribute;
  fieldGoalsMadeYards: Attribute;
  fieldGoalsMissedYards: Attribute;
  fumbleRecoveries: Attribute;
  fumbleRecoveryYards: Attribute;
  fumbles: Attribute;
  fumblesForced: Attribute;
  fumblesLost: Attribute;
  fumblesRecovered: Attribute;
  fumblesRecoveredYards: Attribute;
  fumblesTouchdowns: Attribute;
  gamesPlayed: Attribute;
  grossAvgPuntYards: Attribute;
  hurries: Attribute;
  interceptionPct: Attribute;
  interceptions: Attribute;
  interceptionTouchdowns: Attribute;
  interceptionYards: Attribute;
  kickExtraPoints: Attribute;
  kickoffOB: Attribute;
  kickoffReturns: Attribute;
  kickoffReturnTouchdowns: Attribute;
  kickoffReturnYards: Attribute;
  kickoffs: Attribute;
  kickoffYards: Attribute;
  kickReturnFairCatches: Attribute;
  kickReturnFairCatchPct: Attribute;
  kickReturnFumbles: Attribute;
  kickReturnFumblesLost: Attribute;
  kickReturns: Attribute;
  kickReturnTouchdowns: Attribute;
  kickReturnYards: Attribute;
  kicksBlocked: Attribute;
  longFieldGoalAttempt: Attribute;
  longFieldGoalMade: Attribute;
  longInterception: Attribute;
  longKickoff: Attribute;
  longKickReturn: Attribute;
  longPassing: Attribute;
  longPunt: Attribute;
  longPuntReturn: Attribute;
  longReception: Attribute;
  longRushing: Attribute;
  miscFumbleReturns: Attribute;
  miscFumbleReturnYards: Attribute;
  miscPoints: Attribute;
  miscTouchdowns: Attribute;
  miscYards: Attribute;
  netAvgPuntYards: Attribute;
  netPassingAttempts: Attribute;
  netPassingYards: Attribute;
  netPassingYardsPerGame: Attribute;
  netTotalYards: Attribute;
  netYardsPerGame: Attribute;
  netYardsPerPassAttempt: Attribute;
  offensiveFumblesTouchdowns: Attribute;
  offensiveTwoPtReturns: Attribute;
  onePtSafetiesMade: Attribute;
  oppFumbleRecoveries: Attribute;
  oppFumbleRecoveryYards: Attribute;
  oppSpecialTeamFumbleReturns: Attribute;
  oppSpecialTeamFumbleReturnYards: Attribute;
  passesBattedDown: Attribute;
  passesDefended: Attribute;
  passingAttempts: Attribute;
  passingBigPlays: Attribute;
  passingFirstDowns: Attribute;
  passingFumbles: Attribute;
  passingFumblesLost: Attribute;
  passingTouchdownPct: Attribute;
  passingTouchdowns: Attribute;
  passingYards: Attribute;
  passingYardsAfterCatch: Attribute;
  passingYardsAtCatch: Attribute;
  passingYardsPerGame: Attribute;
  player_id: Attribute;
  pointsAllowed: Attribute;
  puntReturnFairCatches: Attribute;
  puntReturnFairCatchPct: Attribute;
  puntReturnFumbles: Attribute;
  puntReturnFumblesLost: Attribute;
  puntReturns: Attribute;
  puntReturnsStartedInsideThe10: Attribute;
  puntReturnsStartedInsideThe20: Attribute;
  puntReturnTouchdowns: Attribute;
  puntReturnYards: Attribute;
  punts: Attribute;
  puntsBlocked: Attribute;
  puntsBlockedPct: Attribute;
  puntsInside10: Attribute;
  puntsInside10Pct: Attribute;
  puntsInside20: Attribute;
  puntsInside20Pct: Attribute;
  puntsOver50: Attribute;
  puntYards: Attribute;
  QBHits: Attribute;
  QBRating: Attribute;
  quarterbackRating: Attribute;
  receivingBigPlays: Attribute;
  receivingFirstDowns: Attribute;
  receivingFumbles: Attribute;
  receivingFumblesLost: Attribute;
  receivingTargets: Attribute;
  receivingTouchdowns: Attribute;
  receivingYards: Attribute;
  receivingYardsAfterCatch: Attribute;
  receivingYardsAtCatch: Attribute;
  receivingYardsPerGame: Attribute;
  receptions: Attribute;
  returnTouchdowns: Attribute;
  rushingAttempts: Attribute;
  rushingBigPlays: Attribute;
  rushingFirstDowns: Attribute;
  rushingFumbles: Attribute;
  rushingFumblesLost: Attribute;
  rushingTouchdowns: Attribute;
  rushingYards: Attribute;
  rushingYardsPerGame: Attribute;
  sacks: Attribute;
  sacksAssisted: Attribute;
  sacksUnassisted: Attribute;
  sackYards: Attribute;
  sackYardsLost: Attribute;
  safeties: Attribute;
  soloTackles: Attribute;
  specialTeamFumbleReturns: Attribute;
  specialTeamFumbleReturnYards: Attribute;
  stuffs: Attribute;
  stuffYards: Attribute;
  stuffYardsLost: Attribute;
  tacklesForLoss: Attribute;
  tacklesYardsLost: Attribute;
  teamGamesPlayed: Attribute;
  totalKickingPoints: Attribute;
  totalOffensivePlays: Attribute;
  totalPoints: Attribute;
  totalPointsPerGame: Attribute;
  totalTackles: Attribute;
  totalTouchdowns: Attribute;
  totalTwoPointConvs: Attribute;
  totalYards: Attribute;
  totalYardsFromScrimmage: Attribute;
  touchbackPct: Attribute;
  touchbacks: Attribute;
  twoPointPassConvs: Attribute;
  twoPointRecConvs: Attribute;
  twoPointRushConvs: Attribute;
  twoPtPass: Attribute;
  twoPtPassAttempts: Attribute;
  twoPtReception: Attribute;
  twoPtReceptionAttempts: Attribute;
  twoPtReturns: Attribute;
  twoPtRush: Attribute;
  twoPtRushAttempts: Attribute;
  yardsAllowed: Attribute;
  yardsFromScrimmagePerGame: Attribute;
  yardsPerCompletion: Attribute;
  yardsPerGame: Attribute;
  yardsPerKickReturn: Attribute;
  yardsPerPassAttempt: Attribute;
  yardsPerPuntReturn: Attribute;
  yardsPerReception: Attribute;
  yardsPerReturn: Attribute;
  yardsPerRushAttempt: Attribute;
}
export const PlayerStats = createDimension({
  name: 'PlayerStats',
  assistTackles: createAttribute({
    name: 'assistTackles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.assistTackles]',
  }),
  avgGain: createAttribute({
    name: 'avgGain',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgGain]',
  }),
  avgInterceptionYards: createAttribute({
    name: 'avgInterceptionYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgInterceptionYards]',
  }),
  avgKickoffReturnYards: createAttribute({
    name: 'avgKickoffReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgKickoffReturnYards]',
  }),
  avgKickoffYards: createAttribute({
    name: 'avgKickoffYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgKickoffYards]',
  }),
  avgPuntReturnYards: createAttribute({
    name: 'avgPuntReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgPuntReturnYards]',
  }),
  avgSackYards: createAttribute({
    name: 'avgSackYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgSackYards]',
  }),
  avgStuffYards: createAttribute({
    name: 'avgStuffYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.avgStuffYards]',
  }),
  blockedFieldGoalTouchdowns: createAttribute({
    name: 'blockedFieldGoalTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.blockedFieldGoalTouchdowns]',
  }),
  blockedPuntTouchdowns: createAttribute({
    name: 'blockedPuntTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.blockedPuntTouchdowns]',
  }),
  completionPct: createAttribute({
    name: 'completionPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.completionPct]',
  }),
  completions: createAttribute({
    name: 'completions',
    type: 'numeric-attribute',
    expression: '[PlayerStats.completions]',
  }),
  defensiveFumblesTouchdowns: createAttribute({
    name: 'defensiveFumblesTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.defensiveFumblesTouchdowns]',
  }),
  defensivePoints: createAttribute({
    name: 'defensivePoints',
    type: 'numeric-attribute',
    expression: '[PlayerStats.defensivePoints]',
  }),
  defensiveTouchdowns: createAttribute({
    name: 'defensiveTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.defensiveTouchdowns]',
  }),
  defFumbleReturns: createAttribute({
    name: 'defFumbleReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.defFumbleReturns]',
  }),
  defFumbleReturnYards: createAttribute({
    name: 'defFumbleReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.defFumbleReturnYards]',
  }),
  ESPNQBRating: createAttribute({
    name: 'ESPNQBRating',
    type: 'numeric-attribute',
    expression: '[PlayerStats.ESPNQBRating]',
  }),
  ESPNRBRating: createAttribute({
    name: 'ESPNRBRating',
    type: 'numeric-attribute',
    expression: '[PlayerStats.ESPNRBRating]',
  }),
  ESPNWRRating: createAttribute({
    name: 'ESPNWRRating',
    type: 'numeric-attribute',
    expression: '[PlayerStats.ESPNWRRating]',
  }),
  extraPointAttempts: createAttribute({
    name: 'extraPointAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.extraPointAttempts]',
  }),
  extraPointPct: createAttribute({
    name: 'extraPointPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.extraPointPct]',
  }),
  extraPointsBlocked: createAttribute({
    name: 'extraPointsBlocked',
    type: 'numeric-attribute',
    expression: '[PlayerStats.extraPointsBlocked]',
  }),
  extraPointsBlockedPct: createAttribute({
    name: 'extraPointsBlockedPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.extraPointsBlockedPct]',
  }),
  extraPointsMade: createAttribute({
    name: 'extraPointsMade',
    type: 'numeric-attribute',
    expression: '[PlayerStats.extraPointsMade]',
  }),
  fairCatches: createAttribute({
    name: 'fairCatches',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fairCatches]',
  }),
  fairCatchPct: createAttribute({
    name: 'fairCatchPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fairCatchPct]',
  }),
  fieldGoalAttempts: createAttribute({
    name: 'fieldGoalAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts]',
  }),
  fieldGoalAttempts1_19: createAttribute({
    name: 'fieldGoalAttempts1_19',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts1_19]',
  }),
  fieldGoalAttempts20_29: createAttribute({
    name: 'fieldGoalAttempts20_29',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts20_29]',
  }),
  fieldGoalAttempts30_39: createAttribute({
    name: 'fieldGoalAttempts30_39',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts30_39]',
  }),
  fieldGoalAttempts40_49: createAttribute({
    name: 'fieldGoalAttempts40_49',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts40_49]',
  }),
  fieldGoalAttempts50: createAttribute({
    name: 'fieldGoalAttempts50',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttempts50]',
  }),
  fieldGoalAttemptYards: createAttribute({
    name: 'fieldGoalAttemptYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalAttemptYards]',
  }),
  fieldGoalPct: createAttribute({
    name: 'fieldGoalPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalPct]',
  }),
  fieldGoals: createAttribute({
    name: 'fieldGoals',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoals]',
  }),
  fieldGoalsBlocked: createAttribute({
    name: 'fieldGoalsBlocked',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsBlocked]',
  }),
  fieldGoalsBlockedPct: createAttribute({
    name: 'fieldGoalsBlockedPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsBlockedPct]',
  }),
  fieldGoalsMade: createAttribute({
    name: 'fieldGoalsMade',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade]',
  }),
  fieldGoalsMade1_19: createAttribute({
    name: 'fieldGoalsMade1_19',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade1_19]',
  }),
  fieldGoalsMade20_29: createAttribute({
    name: 'fieldGoalsMade20_29',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade20_29]',
  }),
  fieldGoalsMade30_39: createAttribute({
    name: 'fieldGoalsMade30_39',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade30_39]',
  }),
  fieldGoalsMade40_49: createAttribute({
    name: 'fieldGoalsMade40_49',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade40_49]',
  }),
  fieldGoalsMade50: createAttribute({
    name: 'fieldGoalsMade50',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMade50]',
  }),
  fieldGoalsMadeYards: createAttribute({
    name: 'fieldGoalsMadeYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMadeYards]',
  }),
  fieldGoalsMissedYards: createAttribute({
    name: 'fieldGoalsMissedYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fieldGoalsMissedYards]',
  }),
  fumbleRecoveries: createAttribute({
    name: 'fumbleRecoveries',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumbleRecoveries]',
  }),
  fumbleRecoveryYards: createAttribute({
    name: 'fumbleRecoveryYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumbleRecoveryYards]',
  }),
  fumbles: createAttribute({
    name: 'fumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumbles]',
  }),
  fumblesForced: createAttribute({
    name: 'fumblesForced',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumblesForced]',
  }),
  fumblesLost: createAttribute({
    name: 'fumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumblesLost]',
  }),
  fumblesRecovered: createAttribute({
    name: 'fumblesRecovered',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumblesRecovered]',
  }),
  fumblesRecoveredYards: createAttribute({
    name: 'fumblesRecoveredYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumblesRecoveredYards]',
  }),
  fumblesTouchdowns: createAttribute({
    name: 'fumblesTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.fumblesTouchdowns]',
  }),
  gamesPlayed: createAttribute({
    name: 'gamesPlayed',
    type: 'numeric-attribute',
    expression: '[PlayerStats.gamesPlayed]',
  }),
  grossAvgPuntYards: createAttribute({
    name: 'grossAvgPuntYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.grossAvgPuntYards]',
  }),
  hurries: createAttribute({
    name: 'hurries',
    type: 'numeric-attribute',
    expression: '[PlayerStats.hurries]',
  }),
  interceptionPct: createAttribute({
    name: 'interceptionPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.interceptionPct]',
  }),
  interceptions: createAttribute({
    name: 'interceptions',
    type: 'numeric-attribute',
    expression: '[PlayerStats.interceptions]',
  }),
  interceptionTouchdowns: createAttribute({
    name: 'interceptionTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.interceptionTouchdowns]',
  }),
  interceptionYards: createAttribute({
    name: 'interceptionYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.interceptionYards]',
  }),
  kickExtraPoints: createAttribute({
    name: 'kickExtraPoints',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickExtraPoints]',
  }),
  kickoffOB: createAttribute({
    name: 'kickoffOB',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffOB]',
  }),
  kickoffReturns: createAttribute({
    name: 'kickoffReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffReturns]',
  }),
  kickoffReturnTouchdowns: createAttribute({
    name: 'kickoffReturnTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffReturnTouchdowns]',
  }),
  kickoffReturnYards: createAttribute({
    name: 'kickoffReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffReturnYards]',
  }),
  kickoffs: createAttribute({
    name: 'kickoffs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffs]',
  }),
  kickoffYards: createAttribute({
    name: 'kickoffYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickoffYards]',
  }),
  kickReturnFairCatches: createAttribute({
    name: 'kickReturnFairCatches',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnFairCatches]',
  }),
  kickReturnFairCatchPct: createAttribute({
    name: 'kickReturnFairCatchPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnFairCatchPct]',
  }),
  kickReturnFumbles: createAttribute({
    name: 'kickReturnFumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnFumbles]',
  }),
  kickReturnFumblesLost: createAttribute({
    name: 'kickReturnFumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnFumblesLost]',
  }),
  kickReturns: createAttribute({
    name: 'kickReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturns]',
  }),
  kickReturnTouchdowns: createAttribute({
    name: 'kickReturnTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnTouchdowns]',
  }),
  kickReturnYards: createAttribute({
    name: 'kickReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kickReturnYards]',
  }),
  kicksBlocked: createAttribute({
    name: 'kicksBlocked',
    type: 'numeric-attribute',
    expression: '[PlayerStats.kicksBlocked]',
  }),
  longFieldGoalAttempt: createAttribute({
    name: 'longFieldGoalAttempt',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longFieldGoalAttempt]',
  }),
  longFieldGoalMade: createAttribute({
    name: 'longFieldGoalMade',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longFieldGoalMade]',
  }),
  longInterception: createAttribute({
    name: 'longInterception',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longInterception]',
  }),
  longKickoff: createAttribute({
    name: 'longKickoff',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longKickoff]',
  }),
  longKickReturn: createAttribute({
    name: 'longKickReturn',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longKickReturn]',
  }),
  longPassing: createAttribute({
    name: 'longPassing',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longPassing]',
  }),
  longPunt: createAttribute({
    name: 'longPunt',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longPunt]',
  }),
  longPuntReturn: createAttribute({
    name: 'longPuntReturn',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longPuntReturn]',
  }),
  longReception: createAttribute({
    name: 'longReception',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longReception]',
  }),
  longRushing: createAttribute({
    name: 'longRushing',
    type: 'numeric-attribute',
    expression: '[PlayerStats.longRushing]',
  }),
  miscFumbleReturns: createAttribute({
    name: 'miscFumbleReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.miscFumbleReturns]',
  }),
  miscFumbleReturnYards: createAttribute({
    name: 'miscFumbleReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.miscFumbleReturnYards]',
  }),
  miscPoints: createAttribute({
    name: 'miscPoints',
    type: 'numeric-attribute',
    expression: '[PlayerStats.miscPoints]',
  }),
  miscTouchdowns: createAttribute({
    name: 'miscTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.miscTouchdowns]',
  }),
  miscYards: createAttribute({
    name: 'miscYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.miscYards]',
  }),
  netAvgPuntYards: createAttribute({
    name: 'netAvgPuntYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netAvgPuntYards]',
  }),
  netPassingAttempts: createAttribute({
    name: 'netPassingAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netPassingAttempts]',
  }),
  netPassingYards: createAttribute({
    name: 'netPassingYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netPassingYards]',
  }),
  netPassingYardsPerGame: createAttribute({
    name: 'netPassingYardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netPassingYardsPerGame]',
  }),
  netTotalYards: createAttribute({
    name: 'netTotalYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netTotalYards]',
  }),
  netYardsPerGame: createAttribute({
    name: 'netYardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netYardsPerGame]',
  }),
  netYardsPerPassAttempt: createAttribute({
    name: 'netYardsPerPassAttempt',
    type: 'numeric-attribute',
    expression: '[PlayerStats.netYardsPerPassAttempt]',
  }),
  offensiveFumblesTouchdowns: createAttribute({
    name: 'offensiveFumblesTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.offensiveFumblesTouchdowns]',
  }),
  offensiveTwoPtReturns: createAttribute({
    name: 'offensiveTwoPtReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.offensiveTwoPtReturns]',
  }),
  onePtSafetiesMade: createAttribute({
    name: 'onePtSafetiesMade',
    type: 'numeric-attribute',
    expression: '[PlayerStats.onePtSafetiesMade]',
  }),
  oppFumbleRecoveries: createAttribute({
    name: 'oppFumbleRecoveries',
    type: 'numeric-attribute',
    expression: '[PlayerStats.oppFumbleRecoveries]',
  }),
  oppFumbleRecoveryYards: createAttribute({
    name: 'oppFumbleRecoveryYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.oppFumbleRecoveryYards]',
  }),
  oppSpecialTeamFumbleReturns: createAttribute({
    name: 'oppSpecialTeamFumbleReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.oppSpecialTeamFumbleReturns]',
  }),
  oppSpecialTeamFumbleReturnYards: createAttribute({
    name: 'oppSpecialTeamFumbleReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.oppSpecialTeamFumbleReturnYards]',
  }),
  passesBattedDown: createAttribute({
    name: 'passesBattedDown',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passesBattedDown]',
  }),
  passesDefended: createAttribute({
    name: 'passesDefended',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passesDefended]',
  }),
  passingAttempts: createAttribute({
    name: 'passingAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingAttempts]',
  }),
  passingBigPlays: createAttribute({
    name: 'passingBigPlays',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingBigPlays]',
  }),
  passingFirstDowns: createAttribute({
    name: 'passingFirstDowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingFirstDowns]',
  }),
  passingFumbles: createAttribute({
    name: 'passingFumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingFumbles]',
  }),
  passingFumblesLost: createAttribute({
    name: 'passingFumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingFumblesLost]',
  }),
  passingTouchdownPct: createAttribute({
    name: 'passingTouchdownPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingTouchdownPct]',
  }),
  passingTouchdowns: createAttribute({
    name: 'passingTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingTouchdowns]',
  }),
  passingYards: createAttribute({
    name: 'passingYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingYards]',
  }),
  passingYardsAfterCatch: createAttribute({
    name: 'passingYardsAfterCatch',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingYardsAfterCatch]',
  }),
  passingYardsAtCatch: createAttribute({
    name: 'passingYardsAtCatch',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingYardsAtCatch]',
  }),
  passingYardsPerGame: createAttribute({
    name: 'passingYardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.passingYardsPerGame]',
  }),
  player_id: createAttribute({
    name: 'player_id',
    type: 'numeric-attribute',
    expression: '[PlayerStats.player_id]',
  }),
  pointsAllowed: createAttribute({
    name: 'pointsAllowed',
    type: 'numeric-attribute',
    expression: '[PlayerStats.pointsAllowed]',
  }),
  puntReturnFairCatches: createAttribute({
    name: 'puntReturnFairCatches',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnFairCatches]',
  }),
  puntReturnFairCatchPct: createAttribute({
    name: 'puntReturnFairCatchPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnFairCatchPct]',
  }),
  puntReturnFumbles: createAttribute({
    name: 'puntReturnFumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnFumbles]',
  }),
  puntReturnFumblesLost: createAttribute({
    name: 'puntReturnFumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnFumblesLost]',
  }),
  puntReturns: createAttribute({
    name: 'puntReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturns]',
  }),
  puntReturnsStartedInsideThe10: createAttribute({
    name: 'puntReturnsStartedInsideThe10',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnsStartedInsideThe10]',
  }),
  puntReturnsStartedInsideThe20: createAttribute({
    name: 'puntReturnsStartedInsideThe20',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnsStartedInsideThe20]',
  }),
  puntReturnTouchdowns: createAttribute({
    name: 'puntReturnTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnTouchdowns]',
  }),
  puntReturnYards: createAttribute({
    name: 'puntReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntReturnYards]',
  }),
  punts: createAttribute({
    name: 'punts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.punts]',
  }),
  puntsBlocked: createAttribute({
    name: 'puntsBlocked',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsBlocked]',
  }),
  puntsBlockedPct: createAttribute({
    name: 'puntsBlockedPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsBlockedPct]',
  }),
  puntsInside10: createAttribute({
    name: 'puntsInside10',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsInside10]',
  }),
  puntsInside10Pct: createAttribute({
    name: 'puntsInside10Pct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsInside10Pct]',
  }),
  puntsInside20: createAttribute({
    name: 'puntsInside20',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsInside20]',
  }),
  puntsInside20Pct: createAttribute({
    name: 'puntsInside20Pct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsInside20Pct]',
  }),
  puntsOver50: createAttribute({
    name: 'puntsOver50',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntsOver50]',
  }),
  puntYards: createAttribute({
    name: 'puntYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.puntYards]',
  }),
  QBHits: createAttribute({
    name: 'QBHits',
    type: 'numeric-attribute',
    expression: '[PlayerStats.QBHits]',
  }),
  QBRating: createAttribute({
    name: 'QBRating',
    type: 'numeric-attribute',
    expression: '[PlayerStats.QBRating]',
  }),
  quarterbackRating: createAttribute({
    name: 'quarterbackRating',
    type: 'numeric-attribute',
    expression: '[PlayerStats.quarterbackRating]',
  }),
  receivingBigPlays: createAttribute({
    name: 'receivingBigPlays',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingBigPlays]',
  }),
  receivingFirstDowns: createAttribute({
    name: 'receivingFirstDowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingFirstDowns]',
  }),
  receivingFumbles: createAttribute({
    name: 'receivingFumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingFumbles]',
  }),
  receivingFumblesLost: createAttribute({
    name: 'receivingFumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingFumblesLost]',
  }),
  receivingTargets: createAttribute({
    name: 'receivingTargets',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingTargets]',
  }),
  receivingTouchdowns: createAttribute({
    name: 'receivingTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingTouchdowns]',
  }),
  receivingYards: createAttribute({
    name: 'receivingYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingYards]',
  }),
  receivingYardsAfterCatch: createAttribute({
    name: 'receivingYardsAfterCatch',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingYardsAfterCatch]',
  }),
  receivingYardsAtCatch: createAttribute({
    name: 'receivingYardsAtCatch',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingYardsAtCatch]',
  }),
  receivingYardsPerGame: createAttribute({
    name: 'receivingYardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receivingYardsPerGame]',
  }),
  receptions: createAttribute({
    name: 'receptions',
    type: 'numeric-attribute',
    expression: '[PlayerStats.receptions]',
  }),
  returnTouchdowns: createAttribute({
    name: 'returnTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.returnTouchdowns]',
  }),
  rushingAttempts: createAttribute({
    name: 'rushingAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingAttempts]',
  }),
  rushingBigPlays: createAttribute({
    name: 'rushingBigPlays',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingBigPlays]',
  }),
  rushingFirstDowns: createAttribute({
    name: 'rushingFirstDowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingFirstDowns]',
  }),
  rushingFumbles: createAttribute({
    name: 'rushingFumbles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingFumbles]',
  }),
  rushingFumblesLost: createAttribute({
    name: 'rushingFumblesLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingFumblesLost]',
  }),
  rushingTouchdowns: createAttribute({
    name: 'rushingTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingTouchdowns]',
  }),
  rushingYards: createAttribute({
    name: 'rushingYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingYards]',
  }),
  rushingYardsPerGame: createAttribute({
    name: 'rushingYardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.rushingYardsPerGame]',
  }),
  sacks: createAttribute({
    name: 'sacks',
    type: 'numeric-attribute',
    expression: '[PlayerStats.sacks]',
  }),
  sacksAssisted: createAttribute({
    name: 'sacksAssisted',
    type: 'numeric-attribute',
    expression: '[PlayerStats.sacksAssisted]',
  }),
  sacksUnassisted: createAttribute({
    name: 'sacksUnassisted',
    type: 'numeric-attribute',
    expression: '[PlayerStats.sacksUnassisted]',
  }),
  sackYards: createAttribute({
    name: 'sackYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.sackYards]',
  }),
  sackYardsLost: createAttribute({
    name: 'sackYardsLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.sackYardsLost]',
  }),
  safeties: createAttribute({
    name: 'safeties',
    type: 'numeric-attribute',
    expression: '[PlayerStats.safeties]',
  }),
  soloTackles: createAttribute({
    name: 'soloTackles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.soloTackles]',
  }),
  specialTeamFumbleReturns: createAttribute({
    name: 'specialTeamFumbleReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.specialTeamFumbleReturns]',
  }),
  specialTeamFumbleReturnYards: createAttribute({
    name: 'specialTeamFumbleReturnYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.specialTeamFumbleReturnYards]',
  }),
  stuffs: createAttribute({
    name: 'stuffs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.stuffs]',
  }),
  stuffYards: createAttribute({
    name: 'stuffYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.stuffYards]',
  }),
  stuffYardsLost: createAttribute({
    name: 'stuffYardsLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.stuffYardsLost]',
  }),
  tacklesForLoss: createAttribute({
    name: 'tacklesForLoss',
    type: 'numeric-attribute',
    expression: '[PlayerStats.tacklesForLoss]',
  }),
  tacklesYardsLost: createAttribute({
    name: 'tacklesYardsLost',
    type: 'numeric-attribute',
    expression: '[PlayerStats.tacklesYardsLost]',
  }),
  teamGamesPlayed: createAttribute({
    name: 'teamGamesPlayed',
    type: 'numeric-attribute',
    expression: '[PlayerStats.teamGamesPlayed]',
  }),
  totalKickingPoints: createAttribute({
    name: 'totalKickingPoints',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalKickingPoints]',
  }),
  totalOffensivePlays: createAttribute({
    name: 'totalOffensivePlays',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalOffensivePlays]',
  }),
  totalPoints: createAttribute({
    name: 'totalPoints',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalPoints]',
  }),
  totalPointsPerGame: createAttribute({
    name: 'totalPointsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalPointsPerGame]',
  }),
  totalTackles: createAttribute({
    name: 'totalTackles',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalTackles]',
  }),
  totalTouchdowns: createAttribute({
    name: 'totalTouchdowns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalTouchdowns]',
  }),
  totalTwoPointConvs: createAttribute({
    name: 'totalTwoPointConvs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalTwoPointConvs]',
  }),
  totalYards: createAttribute({
    name: 'totalYards',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalYards]',
  }),
  totalYardsFromScrimmage: createAttribute({
    name: 'totalYardsFromScrimmage',
    type: 'numeric-attribute',
    expression: '[PlayerStats.totalYardsFromScrimmage]',
  }),
  touchbackPct: createAttribute({
    name: 'touchbackPct',
    type: 'numeric-attribute',
    expression: '[PlayerStats.touchbackPct]',
  }),
  touchbacks: createAttribute({
    name: 'touchbacks',
    type: 'numeric-attribute',
    expression: '[PlayerStats.touchbacks]',
  }),
  twoPointPassConvs: createAttribute({
    name: 'twoPointPassConvs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPointPassConvs]',
  }),
  twoPointRecConvs: createAttribute({
    name: 'twoPointRecConvs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPointRecConvs]',
  }),
  twoPointRushConvs: createAttribute({
    name: 'twoPointRushConvs',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPointRushConvs]',
  }),
  twoPtPass: createAttribute({
    name: 'twoPtPass',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtPass]',
  }),
  twoPtPassAttempts: createAttribute({
    name: 'twoPtPassAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtPassAttempts]',
  }),
  twoPtReception: createAttribute({
    name: 'twoPtReception',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtReception]',
  }),
  twoPtReceptionAttempts: createAttribute({
    name: 'twoPtReceptionAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtReceptionAttempts]',
  }),
  twoPtReturns: createAttribute({
    name: 'twoPtReturns',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtReturns]',
  }),
  twoPtRush: createAttribute({
    name: 'twoPtRush',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtRush]',
  }),
  twoPtRushAttempts: createAttribute({
    name: 'twoPtRushAttempts',
    type: 'numeric-attribute',
    expression: '[PlayerStats.twoPtRushAttempts]',
  }),
  yardsAllowed: createAttribute({
    name: 'yardsAllowed',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsAllowed]',
  }),
  yardsFromScrimmagePerGame: createAttribute({
    name: 'yardsFromScrimmagePerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsFromScrimmagePerGame]',
  }),
  yardsPerCompletion: createAttribute({
    name: 'yardsPerCompletion',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerCompletion]',
  }),
  yardsPerGame: createAttribute({
    name: 'yardsPerGame',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerGame]',
  }),
  yardsPerKickReturn: createAttribute({
    name: 'yardsPerKickReturn',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerKickReturn]',
  }),
  yardsPerPassAttempt: createAttribute({
    name: 'yardsPerPassAttempt',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerPassAttempt]',
  }),
  yardsPerPuntReturn: createAttribute({
    name: 'yardsPerPuntReturn',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerPuntReturn]',
  }),
  yardsPerReception: createAttribute({
    name: 'yardsPerReception',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerReception]',
  }),
  yardsPerReturn: createAttribute({
    name: 'yardsPerReturn',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerReturn]',
  }),
  yardsPerRushAttempt: createAttribute({
    name: 'yardsPerRushAttempt',
    type: 'numeric-attribute',
    expression: '[PlayerStats.yardsPerRushAttempt]',
  }),
}) as PlayerStatsDimension;

interface teamsDimension extends Dimension {
  abbreviation: Attribute;
  alternateColor: Attribute;
  color: Attribute;
  displayName: Attribute;
  teams_id: Attribute;
  isActive: Attribute;
  location: Attribute;
  logo_url: Attribute;
  teams_name: Attribute;
  nickname: Attribute;
  shortDisplayName: Attribute;
}
export const teams = createDimension({
  name: 'teams',
  abbreviation: createAttribute({
    name: 'abbreviation',
    type: 'text-attribute',
    expression: '[teams.abbreviation]',
  }),
  alternateColor: createAttribute({
    name: 'alternateColor',
    type: 'text-attribute',
    expression: '[teams.alternateColor]',
  }),
  color: createAttribute({
    name: 'color',
    type: 'text-attribute',
    expression: '[teams.color]',
  }),
  displayName: createAttribute({
    name: 'displayName',
    type: 'text-attribute',
    expression: '[teams.displayName]',
  }),
  teams_id: createAttribute({
    name: 'teams_id',
    type: 'numeric-attribute',
    expression: '[teams.id]',
  }),
  isActive: createAttribute({
    name: 'isActive',
    type: 'text-attribute',
    expression: '[teams.isActive]',
  }),
  location: createAttribute({
    name: 'location',
    type: 'text-attribute',
    expression: '[teams.location]',
  }),
  logo_url: createAttribute({
    name: 'logo_url',
    type: 'text-attribute',
    expression: '[teams.logo_url]',
  }),
  teams_name: createAttribute({
    name: 'teams_name',
    type: 'text-attribute',
    expression: '[teams.name]',
  }),
  nickname: createAttribute({
    name: 'nickname',
    type: 'text-attribute',
    expression: '[teams.nickname]',
  }),
  shortDisplayName: createAttribute({
    name: 'shortDisplayName',
    type: 'text-attribute',
    expression: '[teams.shortDisplayName]',
  }),
}) as teamsDimension;
