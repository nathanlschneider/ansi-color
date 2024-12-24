const createColor = (code: number, isBright: boolean = false, isBackground: boolean = false) => {
  const prefix = isBackground ? 40 : 30;
  const brightOffset = isBright ? 60 : 0;
  return (text: string) => `\x1b[${prefix + code + brightOffset};1;4m${text}\x1b[0m`;
};
const ansi = {
  black: createColor(0),
  red: createColor(1),
  green: createColor(2),
  yellow: createColor(3),
  blue: createColor(4),
  magenta: createColor(5),
  cyan: createColor(6),
  white: createColor(7),
  brightBlack: createColor(0, true),
  brightRed: createColor(1, true),
  brightGreen: createColor(2, true),
  brightYellow: createColor(3, true),
  brightBlue: createColor(4, true),
  brightMagenta: createColor(5, true),
  brightCyan: createColor(6, true),
  brightWhite: createColor(7, true),
  bgBlack: createColor(0, false, true),
  bgRed: createColor(1, false, true),
  bgGreen: createColor(2, false, true),
  bgYellow: createColor(3, false, true),
  bgBlue: createColor(4, false, true),
  bgMagenta: createColor(5, false, true),
  bgCyan: createColor(6, false, true),
  bgWhite: createColor(7, false, true),
  bgBrightBlack: createColor(0, true, true),
  bgBrightRed: createColor(1, true, true),
  bgBrightGreen: createColor(2, true, true),
  bgBrightYellow: createColor(3, true, true),
  bgBrightBlue: createColor(4, true, true),
  bgBrightMagenta: createColor(5, true, true),
  bgBrightCyan: createColor(6, true, true),
  bgBrightWhite: createColor(7, true, true),
};
export default ansi;