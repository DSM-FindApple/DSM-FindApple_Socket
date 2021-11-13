import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class MessageImage extends Model {
  messageImageId: number;
  messageImageName: string;
}

MessageImage.init(
  {
    messageImageId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    messageImageName:{
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "message_image", tableName: "message_image" }
);
