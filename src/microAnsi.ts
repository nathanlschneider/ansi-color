const tiny = {
  black: (t:"") => `\x1b[30;1;4m${t}\x1b[0m`,
  red: (t:"") => `\x1b[31;1;4m${t}\x1b[0m`,
  green: (t:"") => `\x1b[32;1;4m${t}\x1b[0m`,
  yellow: (t:"") => `\x1b[33;1;4m${t}\x1b[0m`,
  blue: (t:"") => `\x1b[34;1;4m${t}\x1b[0m`,
  magenta: (t:"") => `\x1b[35;1;4m${t}\x1b[0m`,
  cyan: (t:"") => `\x1b[36;1;4m${t}\x1b[0m`,
  white: (t:"") => `\x1b[37;1;4m${t}\x1b[0m`,
  brightBlack: (t:"") => `\x1b[90;1;4m${t}\x1b[0m`,
  brightRed: (t:"") => `\x1b[91;1;4m${t}\x1b[0m`,
  brightGreen: (t:"") => `\x1b[92;1;4m${t}\x1b[0m`,
  brightYellow: (t:"") => `\x1b[93;1;4m${t}\x1b[0m`,
  brightBlue: (t:"") => `\x1b[94;1;4m${t}\x1b[0m`,
  brightMagenta: (t:"") => `\x1b[95;1;4m${t}\x1b[0m`,
  brightCyan: (t:"") => `\x1b[96;1;4m${t}\x1b[0m`,
  brightWhite: (t:"") => `\x1b[97;1;4m${t}\x1b[0m`,
  bgBlack: (t:"") => `\x1b[40;1;4m${t}\x1b[0m`,
  bgRed: (t:"") => `\x1b[41;1;4m${t}\x1b[0m`,
  bgGreen: (t:"") => `\x1b[42;1;4m${t}\x1b[0m`,
  bgYellow: (t:"") => `\x1b[43;1;4m${t}\x1b[0m`,
  bgBlue: (t:"") => `\x1b[44;1;4m${t}\x1b[0m`,
  bgMagenta: (t:"") => `\x1b[45;1;4m${t}\x1b[0m`,
  bgCyan: (t:"") => `\x1b[46;1;4m${t}\x1b[0m`,
  bgWhite: (t:"") => `\x1b[47;1;4m${t}\x1b[0m`,
  bgBrightBlack: (t:"") => `\x1b[100;1;4m${t}\x1b[0m`,
  bgBrightRed: (t:"") => `\x1b[101;1;4m${t}\x1b[0m`,
  bgBrightGreen: (t:"") => `\x1b[102;1;4m${t}\x1b[0m`,
  bgBrightYellow: (t:"") => `\x1b[103;1;4m${t}\x1b[0m`,
  bgBrightBlue: (t:"") => `\x1b[104;1;4m${t}\x1b[0m`,
  bgBrightMagenta: (t:"") => `\x1b[105;1;4m${t}\x1b[0m`,
  bgBrightCyan: (t:"") => `\x1b[106;1;4m${t}\x1b[0m`,
  bgBrightWhite: (t:"") => `\x1b[107;1;4m${t}\x1b[0m`,
};

export default tiny;