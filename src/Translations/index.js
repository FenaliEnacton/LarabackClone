export const translate = label => {
  const labels = require('./labels.json');
  return labels[label] ? labels[label] : label;
};
