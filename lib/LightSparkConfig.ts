import {
  AccountTokenAuthProvider,
  LightsparkClient,
} from "@lightsparkdev/lightspark-sdk";

const API_TOKEN_CLIENT_ID = `${process.env.API_TOKEN_CLIENT_ID}`;
const API_TOKEN_CLIENT_SECRET = `${process.env.API_TOKEN_CLIENT_SECRET}`;

export const client = new LightsparkClient(
  new AccountTokenAuthProvider(API_TOKEN_CLIENT_ID, API_TOKEN_CLIENT_SECRET)
);
