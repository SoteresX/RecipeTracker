function capitalizeFirstLetter(str) {
  if (!str) return "";  // 1. Handle empty or undefined string gracefully
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalizeFirstLetter;