import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e949710bde46e6cf6f'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';