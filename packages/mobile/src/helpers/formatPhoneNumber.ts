export function formatNumber(number: string) {
  const newNumber = number.split('');
  const def = `${newNumber.slice(0, 3).join('')} ${newNumber.slice(3, 6).join('')} ${newNumber
    .slice(6)
    .join('')}`;

  return def;
}
