import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useMemo } from "react";
import { Program, AnchorProvider } from "@project-serum/anchor";
import idl from "../idl/solana_twitter.json";
const clusterUrl = process.env.REACT_APP_CLUSTER_URL;

const preflightCommitment = "processed";
const commitment = "processed";
const programID = new PublicKey(idl.metadata.address);
let workspace = null;

export const useWorkspace = () => workspace;

export const InitWorkspace = () => {
  const wallet = useAnchorWallet();
  const connection = new Connection("https://api.devnet.solana.com", commitment);
  const provider = useMemo(() => new AnchorProvider(connection, wallet, { preflightCommitment, commitment }), [wallet]);
  const program = useMemo(() => new Program(idl, programID, provider), [provider]);

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
