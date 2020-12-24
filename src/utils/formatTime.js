export const formatTime = arg => {
  if (arg === undefined) {
    return null;
  } else if (isNaN(arg)) {
    return null;
  } else if (arg < 0) {
    return null;
  } else if (typeof arg == 'number' && !isNaN(arg)) {
    let output;
    let seconds = arg % 60;
    let minutes = Math.floor(parseInt((arg / 60) % 60));
    let hours = Math.floor(parseInt((arg / 3600) % 60));
    if (seconds < 10) {
      output = ':0' + seconds;
    } else {
      output = ':' + seconds;
    }
    if (minutes < 10) {
      output = ':0' + minutes + output;
    } else {
      output = ':' + minutes + output;
    }
    if (hours < 10) {
      output = '0' + hours + output;
      return output;
    } else {
      output = hours + output;
      return output;
    }
  }
};
