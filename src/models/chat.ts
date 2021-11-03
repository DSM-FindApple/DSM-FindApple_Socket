import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";
import { Message } from "./message";
import { ChatUser } from "./chatUser";

export class Chat extends Model {
  id: number;
  title: string;
  coverImg: string;
}

Chat.init(
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(50),
    },
    updatedAt: {
      type: Sequelize.STRING(20),
      field: "updated_at",
    },
  },
  { sequelize, modelName: "chat", tableName: "chat" }
);

Chat.hasMany(ChatUser, { foreignKey: "chatId", sourceKey: "id" });
ChatUser.belongsTo(Chat, { foreignKey: "chatId" });

Chat.hasMany(Message, { foreignKey: "chatId", sourceKey: "id" });
Message.belongsTo(Chat, { foreignKey: "chatId" });
