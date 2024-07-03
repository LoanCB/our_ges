import { config } from 'dotenv';

config({ path: `${process.cwd()}/.env` });

export default () => {
  return {
    token: process.env.TOKEN,
  };
};
