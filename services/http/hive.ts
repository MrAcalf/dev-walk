import { Client, ExtendedAccount, Discussion } from "@hiveio/dhive";

const client = new Client(["https://api.hive.blog", "https://api.hivekings.com", "https://anyx.io", "https://api.openhive.network"]);

const ACCOUNT_NAME = `${process.env.NEXT_PUBLIC_HIVE_ACCOUNT_NAME}`

const cmsConnection = async (): Promise<ExtendedAccount[]> => await client.database.getAccounts([ACCOUNT_NAME])
const getPosts = async (): Promise<Discussion[]> => await client.hivemind.getAccountPosts({account: ACCOUNT_NAME, sort: "posts"})

export { cmsConnection, getPosts }