//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract YourManaHP {
    using SafeMath for uint256;
    struct Hero {
        uint256 health;
        uint256 mana;
        uint256 manaRegen;
        uint256 maxMana;
        uint256 plusActionManaCost;
        uint256 minusActionManaCost;
        uint256 lastFetchTimestamp;
    }
    mapping(address => Hero) public heroes;

    function setHero(
        uint256 _manaRegen,
        uint256 _maxMana,
        uint256 _plusActionManaCost,
        uint256 _minusActionManaCost
    ) public {
        Hero memory newHero;
        newHero.manaRegen = _manaRegen;
        newHero.maxMana = _maxMana;
        newHero.plusActionManaCost = _plusActionManaCost;
        newHero.minusActionManaCost = _minusActionManaCost;
        heroes[msg.sender] = newHero;
    }

    function plusAction(
        uint256 manaCost,
        uint256 healthConsume,
        bool _insufficientManaAgree
    ) public {
        require(heroes[msg.sender].plusActionManaCost == manaCost);
        require(
            heroes[msg.sender].plusActionManaCost < heroes[msg.sender].mana ||
                _insufficientManaAgree
        );
        heroes[msg.sender].mana = heroes[msg.sender].mana.sub(manaCost);
        heroes[msg.sender].health = heroes[msg.sender].health.sub(
            healthConsume
        );
    }

    function minusAction(
        uint256 manaCost,
        uint256 healthConsume,
        bool _insufficientManaAgree
    ) public {
        require(heroes[msg.sender].plusActionManaCost == manaCost);
        require(
            heroes[msg.sender].plusActionManaCost < heroes[msg.sender].mana ||
                _insufficientManaAgree
        );
        heroes[msg.sender].mana = heroes[msg.sender].mana.sub(manaCost);
        heroes[msg.sender].health = heroes[msg.sender].health.add(
            healthConsume
        );
    }

    function getMana() public returns (uint256) {
        return block.timestamp;
        // uint256 genTime =
        //     block.timestamp - heroes[msg.sender].lastFetchTimestamp;
        // uint256 generatedMana = heroes[msg.sender].manaRegen.mul(genTime);
        // heroes[msg.sender].mana = heroes[msg.sender].mana.add(generatedMana);
        // heroes[msg.sender].lastFetchTimestamp = block.timestamp;
        // return heroes[msg.sender].mana;
    }
}
