const { expect } = require("chai");
const { parseEth } = require("../utils");

const address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

describe("UMH", function () {
	it("Create New UMH", async function () {
		const UMH = await ethers.getContractFactory("YourManaHP");
		const umh = await UMH.deploy();

		await umh.deployed();
		await umh.setHero(parseEth(1), parseEth(2000), parseEth(300), parseEth(300));
		const newHero = await umh.heroes(address);
		expect(newHero['manaRegen'].toString()).to.equal(parseEth(1).toString());

		console.log(umh);
		const mana = await umh.getMana();
		console.log(mana);
	});
});
