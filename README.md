# ansi-color
Easily use 4 bit ANSI colors in your HTML or terminal 

<div>
  <div id="colorBox">
    <header>
      <div class="flex">
        <label for="textColor">Text Color:</label>
        <select id="textColor">
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="magenta">Magenta</option>
          <option value="cyan">Cyan</option>
          <option selected="selected" value="white">White</option>
          <option value="brightBlack">Bright Black</option>
          <option value="brightRed">Bright Red</option>
          <option value="brightGreen">Bright Green</option>
          <option value="brightYellow">Bright Yellow</option>
          <option value="brightBlue">Bright Blue</option>
          <option value="brightMagenta">Bright Magenta</option>
          <option value="brightCyan">Bright Cyan</option>
          <option value="brightWhite">Bright White</option>
        </select>
      </div>
      <div class="flex">
        <label for="bgColor">Background Color:</label>
        <select id="bgColor">
          <option value="bgBlack">Black</option>
          <option value="bgRed">Red</option>
          <option value="bgGreen">Green</option>
          <option value="bgYellow">Yellow</option>
          <option value="bgBlue">Blue</option>
          <option value="bgMagenta">Magenta</option>
          <option value="bgCyan">Cyan</option>
          <option value="bgWhite">White</option>
          <option value="bgBrightBlack">Bright Black</option>
          <option value="bgBrightRed">Bright Red</option>
          <option value="bgBrightGreen">Bright Green</option>
          <option value="bgBrightYellow">Bright Yellow</option>
          <option value="bgBrightBlue">Bright Blue</option>
          <option value="bgBrightMagenta">Bright Magenta</option>
          <option value="bgBrightCyan">Bright Cyan</option>
          <option value="bgBrightWhite">Bright White</option>
        </select>
      </div>
  </div>
  </header>
</div>
<style>
    #colorBox {
  padding: 20px;
  margin: 20px;
  border: 1px solid #000;
  display: inline-block;
}
select {
  margin: 10px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
<script>
    const colorBox = document.getElementById("colorBox");
const textColorSelect = document.getElementById("textColor");
const bgColorSelect = document.getElementById("bgColor");

const colorMap = {
  black: "black",
  red: "red",
  green: "green",
  yellow: "yellow",
  blue: "blue",
  magenta: "magenta",
  cyan: "cyan",
  white: "white",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#55ff55",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff",
  bgBlack: "black",
  bgRed: "red",
  bgGreen: "green",
  bgYellow: "yellow",
  bgBlue: "blue",
  bgMagenta: "magenta",
  bgCyan: "cyan",
  bgWhite: "white",
  bgBrightBlack: "#555555",
  bgBrightRed: "#ff5555",
  bgBrightGreen: "#55ff55",
  bgBrightYellow: "#ffff55",
  bgBrightBlue: "#5555ff",
  bgBrightMagenta: "#ff55ff",
  bgBrightCyan: "#55ffff",
  bgBrightWhite: "#ffffff"
};
function updateColors() {
  const textColor = textColorSelect.value;
  const bgColor = bgColorSelect.value;
  colorBox.style.color = colorMap[textColor];
  colorBox.style.backgroundColor = colorMap[bgColor];
}

textColorSelect.addEventListener("change", updateColors);
bgColorSelect.addEventListener("change", updateColors);

updateColors();
</script>