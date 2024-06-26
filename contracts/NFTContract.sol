// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.20;

import {ERC721, ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFT is ERC721Enumerable {
    mapping(uint => string) metadatas;
    mapping(uint => address) creators;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function creatorOf(uint tokenId) public view virtual returns (address) {
        address creator = creators[tokenId];
        require(
            creator != address(0),
            "ERC721: owner query for nonexistent token"
        );
        return creator;
    }

    // public
    function mint(string memory uri) public payable {
        uint256 tokenId = totalSupply() + 1;
        _safeMint(msg.sender, tokenId);
        metadatas[tokenId] = uri;
        creators[tokenId] = msg.sender;
    }

    function tokenIdsOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return metadatas[tokenId];
    }

    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}
