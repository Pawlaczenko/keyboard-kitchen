export const pluralize = (count : number, noun : string, suffix = 's') : string =>
  `${noun}${count !== 1 ? suffix : ''}`;