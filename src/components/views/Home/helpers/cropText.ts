export default function cropText(text: string) {
  if (text) {
    const txt = text.slice(0, 150);
    return `${txt}...`;
  }
}
