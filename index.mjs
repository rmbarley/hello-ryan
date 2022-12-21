#!/usr/bin/env node

// const config = {
//   padding: { top: 1, bottom: 1, left: 3 },
//   width: 100,
//   title: "Hi, I'm Ryan",
//   titleAlignment: "center",
// };
// const title = "Hi, I'm Ryan";
//
//

import boxen from "boxen";
import chalk from "chalk";

const darkText = chalk.hex("#21222c");
const whiteText = chalk.hex("#F8F8F2");
const boxenOptions = {
  padding: 1,
  title: "Hi, I'm Ryan",
  titleAlignment: "left",
  borderStyle: "double",
  borderColor: "#Bd93F9",
  backgroundColor: "#282A36",
};

const intro = whiteText.bold(
  "I'm a jack-of-all-stacks software developer living in the woods of New England.\n" +
    "I'm interested in the future of the web and how we can do the most good with tech.\n\n"
);

const links = [
  {
    name: darkText.bgHex("#d6acff")("Website"),
    url: " https://ryanbarley.com",
  },
  {
    name: whiteText.bgHex("#191a21")("GitHub"),
    url: "  https://github.com/rmbarley",
  },
  {
    name: darkText.bgHex("#8be9fd")("LinkedIn"),
    url: "https://linkedin.com/in/rmbarley",
  },
  {
    name: whiteText.bgHex("#9146ff")("Polywork"),
    url: "https://polywork.com/ryan_barley",
  },
  {
    name: darkText.bgHex("#FF92DF")("Cohost"),
    url: "  https://cohost.org/rmbarley",
  },
  {
    name: darkText.bgHex("#1DA1F2")("Twitter"),
    url: " https://twitter.com/ryanbarleydev",
  },
];

const list = links.map((link) => `${link.name} ${link.url}`).join("\n");
console.log(boxen(intro + list, boxenOptions));
