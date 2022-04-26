import "./App.css";
import "./main.css";
import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageNotFound from "./components/PageNotFound";
import PageTopics from "./components/PageTopics";
import PageUsers from "./components/PageUsers";
import PageProfile from "./components/PageProfile";
import PageTweet from "./components/PageTweet";
import AppWrapper from "./components/AppWrapper";
import { InitWorkspace } from "./helpers/useWorkspace";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Testnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })], [network]);
  // InitWorkspace();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppWrapper />}>
              <Route index element={<PageHome />} />
              <Route path="topics" element={<PageTopics />}>
                <Route path=":topic" element={<PageTopics />} />
              </Route>
              <Route path="users" element={<PageUsers />}>
                <Route path=":author" element={<PageUsers />} />
              </Route>
              <Route path="profile" element={<PageProfile />} />
              <Route path="tweet/:tweet" element={<PageTweet />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
