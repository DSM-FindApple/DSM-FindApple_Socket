import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class ChatUser extends Model {
  chatUserId: number;
  userEmail: string;
}

ChatUser.init(
  {
    chatUserId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      field: "chat_user_id",
    },
    isBlock:{
      type: Sequelize.BOOLEAN,
    },
  },
  { sequelize, modelName: "chat_user", tableName: "chat_user" }
);
