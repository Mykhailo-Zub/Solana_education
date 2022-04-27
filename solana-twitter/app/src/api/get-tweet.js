import { useWorkspace } from "../helpers/useWorkspace";
import { Tweet } from "../models/Tweet";

export const GetTweet = async (publicKey) => {
  const { program } = useWorkspace();
  const account = await program.account.tweet.fetch(publicKey);
  return new Tweet(publicKey, account);
};
