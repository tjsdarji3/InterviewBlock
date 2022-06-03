

async function main() {
    const [deployer] = await ethers.getSigners();
    // const charityWallet = signers[1]
    // const marketingWallet =signers[2]
   // We Deploy
    // const givers = await Givers.deploy(charityWallet.address,marketingWallet.address,process.env.ROUTER02);
    const Milk = await ethers.getContractFactory("Milk");
    const Token = await ethers.getContractAt("ItemFactory");
    const milk = await Milk.deploy(Milk.getAddress());
    const token = await Token.deploy(Token.getAddress());
   
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

