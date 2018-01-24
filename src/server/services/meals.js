const fs = require("fs");
const path = require("path");
const process = require("process");

const dir = path.join(process.cwd(), "data");
const store = path.join(dir, "meals.json");

if(!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if(!fs.existsSync(store)) {
  fs.writeFileSync(store, "[]");
}

function doRead() {
  return new Promise(function(resolve, reject) {
    fs.readFile(store, (err, data) => {
      if(err) {
        reject(err);
      }
      resolve(data)
    });
  })
}

function doWrite(data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(store, data, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    })
  });
}

const MealsService = {
  read: function() {
    return doRead()
      .then(JSON.parse);
  },
  write: function(data) {
    let JSONData = JSON.stringify(data);
    return doWrite(JSONData);
  }
}

module.exports = MealsService;
