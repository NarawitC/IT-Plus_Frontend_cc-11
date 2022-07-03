export const dateFormat = (date) => {
  const dateObj = new Date(date);
  const result = dateObj.toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  return result;
};
