import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class DeviceToken extends Model {
  tokenId: number;
  deviceToken: string;
}

DeviceToken.init(
  {
    tokenId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    DeviceToken:{
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "device_token", tableName: "device_token" }
);
