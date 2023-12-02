// services.js
import moment from 'moment';

export const formatDate = (dateString) => {
  const date = moment(dateString).toDate();
  return date.toLocaleDateString("en-US");
};

export const createSummary = (content, limit = 50) => {
  if (typeof content === "string") {
    const words = content.split(" ");
    return words.slice(0, limit).join(" ");
  }
  return "";
};