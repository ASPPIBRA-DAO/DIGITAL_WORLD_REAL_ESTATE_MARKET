const fs = require("fs");
const addresses = require("../build/addresses.json");

const getTargetAddress = (contractName, network) => {
  return addresses[network][contractName];
};

const setTargetAddress = (contractName, network, address) => {
  if (addresses[network] == undefined) {
    addresses[network] = {};
  }
  addresses[network][contractName] = address;
  fs.writeFileSync(
    "build/addresses.json",
    JSON.stringify(addresses),
    function (err) {
      if (err) return console.log(err);
    }
  );
  console.log(
    `${contractName} | ${network} | ${addresses[network][contractName]}`
  );
};

module.exports = {
  getTargetAddress,
  setTargetAddress,
};
