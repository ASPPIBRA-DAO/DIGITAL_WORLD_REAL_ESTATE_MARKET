# Mundo Digital Real Estate Marketplace 🌐 🏡

![ASPPIBRA ESCRITURA](https://raw.githubusercontent.com/ASPPIBRA-DAO/Imagens/890ffa9bfb4c79f650c48e627aa2306299c17c4b/Jornal/ASPPIBRA-ESCRITURA.svg)

## Índice 📑

1. [**Introdução**](#introdução)
2. [**Requisitos**](#requisitos)
3. [**Recursos Principais**](#recursos-principais)
4. [**Uso**](#uso)
5. [**Modelo**](https://github.com/ASPPIBRA-DAO/WEBINAR/tree/main/Modelo%20de%20Escritura)
6. [**Contribuições**](#contribuições)
7. [**Licença**](https://github.com/ASPPIBRA-DAO/DIGITAL_WORLD_REAL_ESTATE_MARKET/blob/a145c7c2e2a1fa311bb814ed8ed9b1819a20631d/LICENSE.md)

## Introduction 🚀

The Mundo Digital Real Estate Marketplace aims to drive digital inclusion through the digitization of real estate records, enabling international transactions in the real estate sector. The digitization process is semi-automated, enabling users of the Mundo Digital application to acquire their digital version of the real estate record.

## Requirements 📋

To run the smart contract, you must have the following:

- A Web3 wallet 💼
- Gas tokens to pay network fees ⛽

### Requirements for scanning real estate records 🏡

In addition to the requirements outlined in the "Requirements" section of this README, the real estate records digitization process also requires the collection of the following information and documents:


| Categoria                       | Documento                                             | Descrição                                                                         |
|---------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Informações pessoais:**      | Nome completo                                         | Nome completo do proprietário                                                    |
|                                 | Data de nascimento                                    | Data de nascimento do proprietário                                                |
|                                 | CPF                                                   | Cadastro de Pessoa Física do proprietário                                         |
|                                 | RG                                                    | Registro Geral do proprietário                                                    |
|                                 | Nacionalidade                                         | Nacionalidade do proprietário                                                     |
|                                 | Estado civil                                          | Estado civil do proprietário                                                      |
| **Comprovante de residência:**  | Conta de água                                         | Comprovante de residência - água                                                 |
|                                 | Conta de luz                                          | Comprovante de residência - luz                                                  |
|                                 | Conta de gás                                          | Comprovante de residência - gás                                                  |
| **IPTU:**                       | Comprovante de pagamento do IPTU                      | Comprovante de pagamento do Imposto sobre a Propriedade Territorial Urbana        |
| **Ônus reais:**                 | Comprovante de ônus reais                             | Documento que comprova ônus reais                                                |
| **Planta topográfica do lote:** | Documento que representa a forma e as dimensões do lote | Planta topográfica do lote                                                    |
| **Planta arquitetônica do imóvel:** | Documento que representa a distribuição interna do imóvel | Planta arquitetônica do imóvel                                              |
| **Planta de zoneamento:**       | Documento que representa a divisão de uma área urbana em zonas | Planta de zoneamento                                                         |
| **Escritura:**                  | Escritura                                             | Documento público que registra a transferência de propriedade de um imóvel        |
| **Fotos do imóvel:**            | Fotos do imóvel                                       | Fotos do imóvel para ilustrar e facilitar a identificação do imóvel                |

## Key Features

The project features a Solidity contract that serves as a decentralized marketplace for non-fungible tokens (NFTs), offering a number of robust features:

1. **Decentralized Creation of NFTs:**
    - Users can easily create their own NFTs in a decentralized way, providing autonomy in generating exclusive content.

2. **Buying and selling NFTs:**
    - Facilitates peer-to-peer trading of NFTs, allowing users to exchange digital assets in a secure and transparent manner.

3. **Decentralized Auctions:**
    - Offers the functionality to create auctions for NFTs, enabling users to accept bids in a decentralized and transparent environment.

## Usage 🛠️

### Screenshots



> [Mundo Digital](https://) - `Proprietários`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/d429afe0d729ceba623dba4a7437e5190a608b94/Layout_app/Escritura/Formulario01.png)
<br />

> [Mundo Digital](https://) - `Localização`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/4786522402a31fc1604dff9c72cf8a5d3926d850/Layout_app/Escritura/Localiza%C3%A7%C3%A3o.png)
<br />

> [Mundo Digital](https://) - `Prefeitura e Cartório`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/8308dbfcde8b0f09bf0694782b39b7f93322489c/Layout_app/Escritura/Prefeitura%20e%20Cartorio.png)
<br />

> [Mundo Digital](https://) - `Profissionais`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/8308dbfcde8b0f09bf0694782b39b7f93322489c/Layout_app/Escritura/Profissionais.png)
<br />

> [Mundo Digital](https://) - `Imóvel`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/4786522402a31fc1604dff9c72cf8a5d3926d850/Layout_app/Escritura/Imovel.png)
<br />

> [Mundo Digital](https://) - `Plano Arquitetônico`
 
![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/4786522402a31fc1604dff9c72cf8a5d3926d850/Layout_app/Escritura/Plano%20Arquitetonico.png)
<br />

> [Mundo Digital](https://) - `Plano Topográfico`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/4786522402a31fc1604dff9c72cf8a5d3926d850/Layout_app/Escritura/Plano%20Topografico.png)
<br />

> [Mundo Digital](https://) - `Plano de Zoneamneto`

![FORMULARIO ESCRITURA](https://github.com/ASPPIBRA-DAO/Imagens/blob/4786522402a31fc1604dff9c72cf8a5d3926d850/Layout_app/Escritura/Plano%20de%20Zoneamento.png)
<br />


# Mundo Digital (DWorld)
Presentation with description of the ERC721 and ERC1155 smart contract with its functions for nft marketplace.



## ABI, Address, and Verification

The abi contract is in `DigitalWorld.abi`. It is the abi of the implementation contract.
Interaction with DWorld is done at the proxy address at `0x00000000000000000000000000000000000`. To see
https://etherscan.io/token/0x0000000000000000000 for live on-chain details and the section on bytecode verification below.

## Contract specification

Digital World (DWorld) is an ERC721 and ERC 1155 token that is minted and burned centrally by ASPPIBRA-DAO,
representing the trusted party backing the token in US dollars. 

### ERC20 Token

DWorld's public interface is ERC721 and ERC1155 interface
specified by [EIP-20](https://github.com/ethereum/ercs/blob/master/ERCS/erc-1155.md).

#### Read Contract
- `name()`
- `symbol()`
- `decimals()`
- `totalSupply()`
- `balanceOf(address who)`
- `allowance(address owner, address spender)`
  
#### Write Contract
- `transfer(address to, uint256 value)`
- `approve(address spender, uint256 value)`
- `transferFrom(address from, address to, uint256 value)`

#### And the usual events.
- `event Transfer(address indexed from, address indexed to, uint256 value)`
- `event Approval(address indexed owner, address indexed spender, uint256 value)`

Typical interaction with the contract will use `transfer` to move the token as payment.
Additionally, a pattern involving `approve` and `transferFrom` can be used to allow another 
address to move tokens from your address to a third party without the need for the middleperson 
to custody the tokens, such as in the 0x protocol. 

#### Warning about ERC20 approve front-running

There is a well known gotcha involving the ERC20 `approve` method. The problem occurs when the owner decides
to change the allowance of a spender that already has an allowance. If the spender sends a `transferFrom` 
transaction at a similar time that the owner sends the new `approve` transaction
and the `transferFrom` by the spender goes through first, then the spender gets to use the 
original allowance, and also get approved for the intended new allowance.

The recommended mitigation in cases where the owner does not trust the spender is to
first set the allowance to zero before setting it to a new amount, checking that the 
allowance was not spent before sending the new approval transaction. Note, however, that any 
allowance change is subject to front-running, which is as simple as watching the 
mempool for certain transactions and then offering a higher gas price to get another 
transaction mined onto the blockchain more quickly.

# Explanation of User Roles

## Minting (Token Creation)
- **Description**: Any user can create a new token.
- **How to Use**: Call the `mint` function by providing a metadata URI and paying a fee if necessary.
- **Function**: `mint(string memory uri) public payable`

## Owner Token Query
- **Description**: Allows users to see all token IDs that a given address has.
- **How to Use**: Use the `tokenIdsOfOwner` function passing the owner's address.
- **Function**: `tokenIdsOfOwner(address _owner) public view returns (uint256[] memory)`

## Metadata URI Query
- **Description**: Allows you to obtain the URI of the metadata of a specific token.
- **How to Use**: Call the `tokenURI` function with the ID of the desired token.
- **Function**: `tokenURI(uint256 tokenId) public view returns (string memory)`

## Token Creator Query
- **Description**: Allows you to check who created a specific token.
- **How to Use**: Use the `creatorOf` function passing the token ID.
- **Function**: `creatorOf(uint tokenId) public view returns (address)`

## Token Transfer
- **Description**: Users can transfer tokens between addresses.
- **How to Use**: Use the `transferFrom` or `safeTransferFrom` functions (with or without additional data).
- **Functions**:
   - `transferFrom(address from, address to, uint256 tokenId) public`
   - `safeTransferFrom(address from, address to, uint256 tokenId) public`
   - `safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public`

## Approve Transfers
- **Description**: Users can authorize other addresses to transfer their specific tokens or all of their tokens.
- **How to Use**: Call the `approve` or `setApprovalForAll` functions.
- **Functions**:
   - `approve(address to, uint256 tokenId) public`
   - `setApprovalForAll(address operator, bool approved) public`

## Approval Consultation
- **Description**: Allows you to check who is approved to transfer a specific token or all tokens from an owner.
- **How to Use**: Use the `getApproved` or `isApprovedForAll` functions.
- **Functions**:
   - `getApproved(uint256 tokenId) public view returns (address)`
   - `isApprovedForAll(address owner, address operator) public view returns (bool)`

## Update Metadata
- **Description**: The token owner can update the token metadata.
- **How to Use**: Call the `setTokenURI` function providing the token ID and the new URI.
- **Function**: `setTokenURI(uint256 tokenId, string memory uri) public`

## Voting
- **Description**: Used to interact with ecosystem governance or proposals.
- **How to Use**: Depends on the specific implementation of governance in the contract, usually involving voting functions.
- **Function**: Dependent on the specific governance contract, which is not detailed here.

## Comments
These functions enable a wide range of interactions with NFT tokens, from creation to transfer and participation in ecosystem governance. Make sure you understand the permissions and restrictions associated with each role before using them.

# Contract Administrator Roles

## Controlling NFT Supply

For some specific cases, the total supply of NFTs is guaranteed by securities held in reserve at ASPPIBRA-DAO. A single address, called `supplyController`, has the authority to mint and burn tokens. This process is based on the real movement of money in and out of the reserve, according to requests for the purchase and redemption of NFTs.

### Supply Control Interface

#### Methods

- **`supplyController()`**: Returns the current address of the supply controller.

#### Events

- **`SupplyIncreased(address indexed to, uint256 value)`**: Emits an event when the supply of NFTs is increased.
- **`SupplyDecreased(address indexed from, uint256 value)`**: Emits an event when the supply of NFTs is reduced.
- **`SupplyControllerSet(address indexed oldSupplyController, address indexed newSupplyController)`**: Emits an event when the supply controller is changed.

### Examples

- *Supply Increase*: When new funds are added to the reserve, `supplyController` mints new NFTs, increasing the total in circulation.
- *Supply Reduction*: When NFTs are redeemed for funds, `supplyController` burns these tokens, reducing the total supply.

## Pausing the Contract

In the event of a critical security threat, ASPPIBRA-DAO has the ability to pause all NFT token transfers and approvals. This functionality is managed by an `owner` role, as implemented by the OpenZeppelin standards [Ownable](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/5daaf60d11ee2075260d0f3adfb22b1c536db983/contracts/ownership/Ownable.sol) and [Pausable ](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/5daaf60d11ee2075260d0f3adfb22b1c536db983/contracts/lifecycle/Pausable.sol).

### Examples

- *Emergency Situation*: If a critical vulnerability is discovered, the pause function can be activated to prevent malicious movements until the situation is resolved.

## Asset Protection Function

To comply with regulatory requirements, we have introduced an asset protection function that allows you to freeze or seize the assets of a criminal party when required by law, such as by court order or other legal process.

### Asset Protection Role

- **`assetProtectionRole`**: This role can freeze and unfreeze NFTs from any address on the blockchain and clear the balance of a frozen address, allowing authorities to confiscate the assets.
- **`isFrozen(address who)`**: Checks if an address is frozen.

### Examples

- *Asset Freezing*: If an address is identified as belonging to a criminal entity, `assetProtectionRole` can freeze NFTs from that address, preventing any transfer.

## Upgradability Proxy

To facilitate contract updating on the immutable blockchain, we follow a delegation pattern with two contracts: a proxy contract that represents the token and an implementation contract that contains the token logic. 

### Delegation with Delegatecall

Delegation uses `delegatecall`, executing the implementation contract code in the context of the proxy store. This allows you to change the implementation contract without changing the proxy contract data or address.

- **Proxy Used**: AdminUpgradeabilityProxy from ZeppelinOS.

## Update Process

The implementation contract only handles the logic of the non-administrative methods. To update the implementation contract, we call `upgradeTo()` or `upgradeToAndCall()` on the proxy. The second method is used for updates that require new initialization or data migration, all in a single transaction.

### Examples

- *Implementation Update*: To add new features or fix bugs, we deploy a new implementation contract and use `upgradeToAndCall()` to migrate the necessary data.

By following these practices, we ensure that the contract remains secure, updatable, and compliant with legal regulations.

## Bytecode verification

The proxy contract and implementation contracts are verified on etherscan at the following links:

Because the implementation address in the proxy is a private variable, 
verifying that this is the proxy being used requires reading contract
storage directly. This can be done using a mainnet node, such as infura,
by pasting the network address in `truffle-config.js` and running 

`truffle exec ./getImplementationAddress.js --network mainnet`

## Contract Tests

### Token
- [Token Contract](https://testnet.bscscan.com/token/0xb1d4a44ce8aa5e2eb2e23d7002693918f4f36c72)

### NFT
- [NFT Contract 1](https://testnet.bscscan.com/address/0x4d92829620a7dEf47Ba60f9E68eAC1e1683A87fF#code)
- [NFT Contract 2](https://testnet.bscscan.com/address/0x2cfF281E01d58143089997AC5A495D85d89D1bB2#code)

### Contracts
- [Contract 1](https://testnet.bscscan.com/address/0x3fda2E660DC06D3eCc2cC5a797af7eD8De89f2f4#code)
- [Contract 2](https://testnet.bscscan.com/address/0x7FF0884888EA59c6a02C2D8a6844A27235BA78F5#code)
- [Contract 3](https://testnet.bscscan.com/address/0x86a98eb31721f997Fed65f2aEa535DD428dCe193#code)

As a first step run the initial setup

`make setup`

Next to run the smart contract tests, in another terminal, start ganache-cli

`make ganache`

Then in the original terminal where setup was executed, run

`make test-contracts`

You can also run `make test-contracts-coverage` to see a coverage report.

## Contributions 🤝

### Reporting Problems 🐛

If you encounter any problems or bugs, feel free to open an issue in our repository. Be sure to provide details about the issue you encountered, including steps to reproduce, error messages, and relevant information to facilitate the fix.

### Proposing Improvements 🚀

Do you have ideas to improve the smart contract or user experience on Mundo Digital Marketplace? Open an issue to discuss your proposals. We're open to suggestions for new features, performance improvements, and general optimizations.

### Contributing Code 💻

If you want to directly contribute code, follow these steps:

1. **Fork the Repository:** Fork our repository to your own account.
2. **Branch Creation:** Create a branch to work on your contribution.
3. **Development:** Implement your improvements or corrections.
4. **Testing:** Be sure to test your changes.
5. **Pull Request (PR):** Open a PR describing your changes and explaining the benefits.
6. **Review:** Wait for our maintainers to review your PR.

### Documentation 📚

Contributions to documentation are also valued. If you identify areas that need more clarity or want to add useful information, please feel free to submit proposed changes to the documentation.

Thanks in advance for your support and contributions to making the Digital World smart contract even better. Together, we can create a more robust and efficient platform.

## License 📄
This project is protected by the terms of the Proprietary Software license model. See the file [**Licença**](https://github.com/ASPPIBRA-DAO/DIGITAL_WORLD_REAL_ESTATE_MARKET/blob/a145c7c2e2a1fa311bb814ed8ed9b1819a20631d/LICENSE.md) for details.
