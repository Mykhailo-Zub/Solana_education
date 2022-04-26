import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useMemo } from "react";
import { Program, AnchorProvider } from "@project-serum/anchor";
import idl from "my-project-depends";

const programID = new PublicKey(idl.metadata.address);
let workspace = null;

export const useWorkspace = () => workspace;

export const InitWorkspace = () => {
  const wallet = useAnchorWallet();
  const connection = new Connection("http://127.0.0.1:8899");
  const provider = useMemo(() => new AnchorProvider(connection, wallet), [wallet]);
  const program = useMemo(() => new Program(idl, programID, provider), [provider]);

  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
