import { config } from '../../deps.ts';

const {
  PORT,
  MONGO_ATLAS_SRV,
  MONGO_PRIMARY_CLUSTER,
  MONGO_PSW,
  MONGO_USERNAME,
  MONGO_DBNAME,
} = config();

export default {
  PORT: PORT ? Number(PORT) : 8080,
  MONGO_PRIMARY_CLUSTER: MONGO_PRIMARY_CLUSTER || 'primarycluster',
  MONGO_PSW: MONGO_PSW || 'password',
  MONGO_USERNAME: MONGO_USERNAME || 'user',
  MONGO_DBNAME: MONGO_DBNAME || 'db',
};
