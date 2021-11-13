import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";
import { MessageImage } from "./messageImage";

export class Message extends Model {
  messageId: string;
  message: string;
  sendTime: string;
  sendDate: Date;
  messageType: Enumerator;
  chatId: number;
  kakaoId: string;
}

Message.init(
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: Sequelize.STRING(500),
    },
    sendTime:{
      type: Sequelize.TIME
    },
    sendDate:{
      type: Sequelize.DATE
    },
    messageType:{
      type: Sequelize.ENUM("IMAGE", "INFO", "MESSAGE")
    },
    chatId: {
      type: Sequelize.BIGINT,
      field: "chat_id",
    },
    kakaoId: {
      type: Sequelize.NUMBER,
      field: "kakaoId"
    }
  },
  { sequelize, modelName: "message", tableName: "message" }
);

Message.hasMany(MessageImage, { foreignKey: "messageId", sourceKey: "messageId" });
MessageImage.belongsTo(Message, { foreignKey: "messageId" });