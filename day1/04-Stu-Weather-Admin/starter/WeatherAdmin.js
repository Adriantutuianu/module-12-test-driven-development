const fs = require('fs');
const UserSearch = require('UserSearch.js');
const dayjs = require('dayjs');

const WeatherAdmin = function () {
  this.getData = () => {
    fs.readFile('log.txt', 'utf8', (data, error) => {
      console.log(data);
    });
  };

  this.newUserSearch = (name, location) => {
    const newUserSearch = new UserSearch(name, location);
    const logTxt = `\nName: ${newUserSearch.name} Location: ${
      newUserSearch.location
    } Date: ${dayjs(newUserSearch.date).format('DD/MM/YYYY')}`;

    fs.appendFile('log.txt', 'utf-8', logTxt, (err) => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
