/**
 * @title Verifier Ignition Module
 * @author Anthony Spedaliere
 * @notice Ignition module for deploying Verifier.sol
 * @dev This module deploys the verifier contract that validates zk-SNARK proofs
 */

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VerifierModule", (m) => {
  const verifier = m.contract("Groth16Verifier");

  return {
    verifier,
  };
});
