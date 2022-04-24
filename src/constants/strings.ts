export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Gudu jobu (Good Job)!', 'Yego shaa.. ukoze neza', 'Byizaaaaa!']
export const GAME_COPIED_MESSAGE = 'Umukino wakorewe copy ntakibazo.'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Ntabwo inyuguti zihagije'
export const WORD_NOT_FOUND_MESSAGE = 'Ijambo ntiryabonetse'
export const HARD_MODE_ALERT_MESSAGE =
  'Uburyo bukomeye bushoboka gusa mugitangira!'
export const HARD_MODE_DESCRIPTION =
  'Ibimenyetso byose byerekanwe bigomba gukoreshwa mumagambo byakurikiyeho'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Gushyiramo amabara agaragara neza'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ijambo ryari ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Ugomba gukoresha ${guess} mumwanya wa ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Ijambo mwahisemo rigomba kuba ririmo ijambo ${letter}`
export const ENTER_TEXT = 'Injiza'
export const DELETE_TEXT = 'Siba'
export const STATISTICS_TITLE = 'Sitatisitike (Statistiques)'
export const GUESS_DISTRIBUTION_TEXT = 'Uko mwagiye muhitamo amagambo'
export const NEW_WORD_TEXT = 'Ijambo rishya muri'
export const SHARE_TEXT = 'Sangira nabandi (share)'
export const TOTAL_TRIES_TEXT = 'Inshuro zose zageragejwe'
export const SUCCESS_RATE_TEXT = 'amagambo mwahisemo neza'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
