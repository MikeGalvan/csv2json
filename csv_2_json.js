const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const colors = require("colors");

const csvFile = "./customer-data.csv";

const convert2Json = () => {
  console.log("Converting process has Begun...".yellow);
  csv()
    .fromFile(csvFile)
    .then(jsonObj => {
      console.log(colors.green("The File was converted ->"));
      console.log(jsonObj);
      console.log("Converting process has Finished.".magenta);
    });
};

convert2Json();
