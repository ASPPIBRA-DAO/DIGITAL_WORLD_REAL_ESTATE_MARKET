const { getTargetAddress } = require("./helpers");

async function main() {
  const network = hre.network.name;
  getTargetAddress("Token", network);
  const Token = getTargetAddress("Token", network);
  const NFT1 = getTargetAddress("NFT1", network);
  const NFT2 = getTargetAddress("NFT2", network);
  const NFT3 = getTargetAddress("NFT3", network);
  const Marketplace = getTargetAddress("Marketplace", network);
  console.log({ Token }, { NFT1 }, { NFT2 }, { NFT3 }, { Marketplace });

  try {
    await run("verify:verify", {
      address: Token,
      constructorArguments: [1e9],
    });
    console.log("Verified Token");
  } catch (e) {
    console.log(e);
  }

  try {
    await run("verify:verify", {
      address: NFT1,
      constructorArguments: ["test1 NFT", "t1NFT"],
    });
    console.log("Verified NFT1");
  } catch (e) {
    console.log(e);
  }

  try {
    await run("verify:verify", {
      address: NFT2,
      constructorArguments: ["test2 NFT", "t2NFT"],
    });
    console.log("Verified NFT2");
  } catch (e) {
    console.log(e);
  }

  try {
    await run("verify:verify", {
      address: NFT3,
      constructorArguments: ["test3 NFT", "t3NFT"],
    });
    console.log("Verified NFT3");
  } catch (e) {
    console.log(e);
  }

  try {
    await run("verify:verify", {
      address: Marketplace,
      constructorArguments: [Token],
    });
    console.log("Verified Marketplace");
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
