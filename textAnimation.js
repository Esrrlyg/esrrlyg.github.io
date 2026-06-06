export function typeTerminal(element, lines, speed = 20, lineDelay = 200) {
  let i = 0;
  let char = 0;
  let currentLineEl = null;

  function type() {
    if (i >= lines.length) return;

    const line = lines[i];

    if (char === 0) {
      currentLineEl = document.createElement("div");

      currentLineEl.className =
        line.type === "cmd" ? "text-green-400" : "text-zinc-300";

      element.appendChild(currentLineEl);
    }

    const text = line.text;

    if (char < text.length) {
      currentLineEl.textContent += text.charAt(char);
      char++;
      setTimeout(type, speed);
    } else {
      i++;
      char = 0;
      setTimeout(type, lineDelay);
    }
  }

  type();
}