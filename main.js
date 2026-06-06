import { typeTerminal } from "./textAnimation.js";

const terminal = document.getElementById("terminal");

const lines = [
  { type: "cmd", text: "$ whoami" },
  { type: "out", text: "Jesse James" },

  { type: "cmd", text: "$ status" },
  { type: "out", text: "Building portfolio..." },

  { type: "cmd", text: "$ projects" },
  { type: "out", text: "• Bubble Tea TUI" },
  { type: "out", text: "• Terminal Chat App" },
  { type: "out", text: "• 2D Godot Engine Games" },
];

typeTerminal(terminal, lines);