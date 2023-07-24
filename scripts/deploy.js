
const main = async() => {
  

  const Transactions = await hre.ethers.getContractFactory("Transations");

  const transctions = await Transactions.deploy();

  await transctions.deploy();

  console.log("Transactions deployed to: ", transctions.address);
}
const runMain = async () =>{
  try {
    await main();
    Process.exit(0);
  } catch (error) {
    console.erroe(error);
    process.exit(1);
  }
}

runMain();