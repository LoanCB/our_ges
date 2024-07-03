import { Client } from 'discord.js';
import configurationConfig from './utils/configuration.config';
import ready from './listeners/ready';

console.log('Bot is starting...');

const client = new Client({ intents: [] });
ready(client);
client.login(configurationConfig().token);
