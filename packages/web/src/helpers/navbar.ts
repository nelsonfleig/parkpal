let color: string;
export function randomColor() {
  if (!color) {
    const hex = Math.floor(Math.random() * 0xffffff);
    color = `#${hex.toString(16)}`;
  }
  return color;
}
