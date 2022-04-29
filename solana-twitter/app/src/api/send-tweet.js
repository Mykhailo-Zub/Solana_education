import { web3 } from "@project-serum/anchor";
import { useWorkspace } from "../helpers/useWorkspace";
import { Tweet } from "../models/Tweet";

// 1. Define the sendTweet endpoint.
export const SendTweet = async (topic, content) => {
  const { wallet, program, programID } = useWorkspace();

  // 2. Generate a new Keypair for our new tweet account.
  const tweet = web3.Keypair.generate();

  // 3. Send a "SendTweet" instruction with the right data and the right accounts.
  await program.rpc.sendTweet(topic, content, {
    accounts: {
      author: wallet.publicKey,
      tweet: tweet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    },
    signers: [tweet],
  });

  // 4. Fetch the newly created account from the blockchain.
  const tweetAccount = await new Promise((resolve) => {
    let resp;
    let interval = setInterval(async () => {
      if (resp) {
        clearInterval(interval);
        resolve(resp);
      } else {
        try {
          resp = await program.account.tweet.fetch(tweet.publicKey);
        } catch {
          resp = false;
        }
      }
    }, 500);
  });

  // 5. Wrap the fetched account in a Tweet model so our frontend can display it.
  return new Tweet(tweet.publicKey, tweetAccount);
  // return true;
};
