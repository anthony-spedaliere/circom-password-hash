/**
 * @title Proof Verification Script
 * @author Anthony Spedaliere
 * @notice Script to verify a ZK proof using the deployed Groth16Verifier contract
 * @dev Uses proof data from snarkjs generatecall to verify a proof on-chain
 */

const { ethers } = require("hardhat");

async function main() {
  // Get the deployed verifier contract address
  // Replace with your actual deployed contract address after deployment
  const VERIFIER_ADDRESS = "0x5782Ec3D7f2AfcdbC7Dfa78BdE9113A824f8C118";

  // Get the verifier contract instance
  const verifier = await ethers.getContractAt(
    "Groth16Verifier",
    VERIFIER_ADDRESS
  );

  console.log("Calling verifyProof on contract:", VERIFIER_ADDRESS);

  // Proof data from snarkjs generatecall
  a = [
    "0x2c7a9eb92acfd22fb128f7f415f568fcd98474669540d3ccb4db7bf20f5c9d54",
    "0x012f5e100e7bf84bf7eb371e75d6f1c5d6ef802682b11633adce55cdf492a29c",
  ];

  b = [
    [
      "0x1327f48ac28e6584ed1bc57c050bee1336d054d4f129abd34b78810f69e0a83b",
      "0x23295195bd2cd186ed07998d08ba08b248d540248f74d6d50c136f0dd4c55181",
    ],
    [
      "0x18d9f0002fa848bda597f2f238e01bd25f04767d5371108045945ff339d1e201",
      "0x1a12dab7f4372a9d47ef1106ce244471b68923de3a557bbdfaac6f5982b07ea3",
    ],
  ];

  c = [
    "0x2d8c302b8a0827360173c437d242b971c459f2116c9a5063593114a014af4d73",
    "0x0fd00554f6b23a4eee37070c765b559a52cbd96b19274b27bfc4c08d8fe05234",
  ];

  publicInputs = [
    "0x0dc3cb30156e5a400fd19cb76a2a2755d6c12e1cd2d0a4c9f1010d413e08282e",
    "0x0000000000000000000000000000000000000000000000000000000000000001",
  ];

  // Call verifyProof function
  console.log("Verifying proof...");
  const result = await verifier.verifyProof(a, b, c, publicInputs);

  console.log("Proof verification result:", result);

  if (result) {
    console.log("✅ Proof is valid!");
  } else {
    console.log("❌ Proof is invalid!");
  }

  return result;
}

// Execute the verification
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
