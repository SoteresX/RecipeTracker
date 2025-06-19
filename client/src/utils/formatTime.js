function formatTime(minutes) {

  console.log(minutes);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  } else {
    const hours = minutes / 60
    return `${hours % 1 === 0 ? hours : hours.toFixed(1)} hour${hours !== 1 ? 's' : ''}`
  }
}

export default formatTime;