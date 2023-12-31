const hre=require("hardhat");

const main=async()=>{
    const Transactions=await hre.ethers.getContractFactory("Transactions");
    const tarnsactions=await Transactions.deploy();
    await tarnsactions.deployed();
    console.log("Transaction deployed to:",tarnsactions.address);
}

const runMain=async()=>{
    try{
        await main()
        process.exit(0);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

runMain()
