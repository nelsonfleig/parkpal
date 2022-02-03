const getAvailableTimes = (hours: number[]): string[] => {
  const available = [];
  for (let i = hours[0]; i <= hours[1]; i += 1) {
    available.push(`${i}:00`);
  }
  return available;
};

export default getAvailableTimes;
