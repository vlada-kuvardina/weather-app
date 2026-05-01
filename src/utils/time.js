export const getCityTime = (timezone) => {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;

  return new Date(utc + timezone * 1000);
};