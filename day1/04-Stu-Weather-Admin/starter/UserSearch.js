const weather = require("weather-js");

// Creates a UserSearch Constructor
const UserSearch = function (name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now(); // Corrected to Date.now()

  this.getWeather = () => {
    weather.find({ search: this.location, degreeType: "C" }, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(JSON.stringify(result, null, 2));
    });
  };
};

module.exports = UserSearch;
