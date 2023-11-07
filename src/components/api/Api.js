// Generating random times to mimic an external API

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
};

// 
export function fetchAPI(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate();
  
    let random = seededRandom(seed);
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
}

// Function that accepts the booking form data as a parameter and return true if the data was successfully submitted
export function submitAPI(formData) {
  return true;
}