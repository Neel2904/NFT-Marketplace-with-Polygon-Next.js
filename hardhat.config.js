require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const project_ID = "ebfb51d7b8b8402ca7bfdafd40adfdc7";

module.exports = {
  networks: {
    hardhat: {
      chainID: 1337,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${project_ID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
