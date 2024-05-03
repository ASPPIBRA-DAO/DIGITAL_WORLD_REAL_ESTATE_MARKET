## Deploy contract in bsc testnet
```
npm run deploy
```

Deployed address is saved in build/addresses.json

## Verify contract in bsc testnet
```
npm run verify
```

## Mint
```
npm run test-nft
```

Mint nft by calling `mint()` with metadata URI which is uploaded to IPFS.
You can see metadata URIs in resources/metadata_hash.json.

## Check minted NFT
You can see minted NFTs in testnet Opensea.

https://testnets.opensea.io/collection/test1-nft-9

Some NFT's images are not displayed as they are in testnet. It works perfectly in livenet Opensea.