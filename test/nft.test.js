const hre = require('hardhat');
const { ethers } = require('hardhat');
const {
  getTargetAddress,
} = require('../scripts/helpers');
const uris = require('../resources/metadata_hash.json');

describe('Test NFT', () => {
  it(`Mint`, async () => {
    const [owner] = await ethers.getSigners();
    const network = hre.network.name;
    const nftAddress = getTargetAddress("NFT1", network);
    const nftContract = await ethers.getContractAt("NFT", nftAddress);
    for (let i = 1; i <= 4; ++i) {
      const uri = uris[`${i}`];
      tx = await nftContract.mint(uri);
      await tx.wait();
      console.log({uri});
    }
  });
});
