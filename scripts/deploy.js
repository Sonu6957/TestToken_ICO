async function main() {

	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const tokencontract = await ethers.getContractFactory("MyToken");
	const tokendeployment = await tokencontract.deploy();
    const ICOcontract = await ethers.getContractFactory("ICO");
	const ICOdeployment = await ICOcontract.deploy(deployer.address,tokendeployment.address);
    
    const purchaseaddress="0xdD870fA1b7C4700F2BD7f44238821C26f7392148";
    const deployed =await tokendeployment.transfer(ICOdeployment.address,await tokendeployment.totalSupply());
    // const transferamount= await ICOdeployment.purchase(deployer.address,{ value: ethers.utils.parseUnits("74000000000000","wei") });
    
    console.log("ICOdepl ",deployed);
    // console.log("Amount transferred is :",transferamount);
	console.log("TokenContract deployed at:", tokendeployment.address);
    console.log("ICOContract deployed at:", ICOdeployment.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });