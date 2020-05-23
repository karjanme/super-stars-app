export enum StarColor {
  Black = '#00000',
  Blue = '#1DACD6',
  Green = '#B2EC5D',
  Mint = '#68CC99',
  Pink = '#FFC0CB',
  Purple = '#E6E6FA',
  Red = '#FF0000',
  Yellow = '#FFFF00'
}

export const StarColorValueMap = new Map<string, StarColor>([
  ['#000000', StarColor.Black],
  ['#1DACD6', StarColor.Blue],
  ['#B2EC5D', StarColor.Green],
  ['#68CC99', StarColor.Mint],
  ['#FFC0CB', StarColor.Pink],
  ['#E6E6FA', StarColor.Purple],
  ['#FF0000', StarColor.Red],
  ['#FFFF00', StarColor.Yellow],
]);
