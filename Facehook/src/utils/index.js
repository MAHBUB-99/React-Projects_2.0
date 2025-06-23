export const getDateDifference = (date) => {
  let diff = new Date().getTime() - new Date(date).getTime();

  diff = diff / 1000; // Convert to seconds

  let years = Math.floor(diff / 31536000);
  diff -= years * 31536000;

  let months = Math.floor(diff / 2592000);
  diff -= months * 2592000;

  let days = Math.floor(diff / 86400);
  diff -= days * 86400;

  let hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  let minutes = Math.floor(diff / 60);
  diff -= minutes * 60;
  let seconds = Math.floor(diff);
  diff -= seconds;

  let message;

  if (years > 0) {
    message = `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    message = message
      ? `${message} ${months} month${months > 1 ? "s" : ""}`
      : `${months} month${months > 1 ? "s" : ""}`;
  }
  if (days > 0) {
    message = message
      ? `${message} ${days} day${days > 1 ? "s" : ""}`
      : `${days} day${days > 1 ? "s" : ""}`;
  }

  if (hours > 0) {
    message = `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    message = message
      ? `${message} ${minutes} minute${minutes > 1 ? "s" : ""}`
      : `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }

  return message;
};
