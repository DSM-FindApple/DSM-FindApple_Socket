import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";
import { Message } from "./message";
import { ChatUser } from "./chatUser";
import { DeviceToken } from "./deviceToken";
import { Find } from "./find";
import { Lost } from "./lost";
import { MessageImage } from "./messageImage";
import { Promise } from "./promise";

export class User extends Model {
  kakaoId: number;
  kakaoNickname: string;
  areaCode: number;
}

User.init(
  {
    kakaoId:{
      type: Sequelize.NUMBER,
    }
    ,
    kakaoNickname: {
      type: Sequelize.STRING(20),
    },
    areaCode: {
      type: Sequelize.NUMBER,
    },
  },
  { sequelize, modelName: "user", tableName: "user" }
);

User.hasMany(ChatUser, { foreignKey: "kakaoId", sourceKey: "kakaoId" });
ChatUser.belongsTo(User, { foreignKey: "kakaoId" });

User.hasMany(Message, { foreignKey: "kakaoId", sourceKey: "kakaoId" });
Message.belongsTo(User, { foreignKey: "kakaoId" });

User.hasMany(DeviceToken, { foreignKey: "kakaoId", sourceKey: "kakaoId"});
DeviceToken.belongsTo(User, {foreignKey: "kakaoId"});

User.hasMany(Find, { foreignKey: "kakaoId", sourceKey: "kakaoId"});
Find.belongsTo(User, {foreignKey: "kakaoId"});

User.hasMany(Lost, { foreignKey: "kakaoId", sourceKey: "kakaoId"});
Lost.belongsTo(User, {foreignKey: "kakaoId"});

User.hasMany(MessageImage, {foreignKey: "kakaoId", sourceKey: "kakaoId"});
MessageImage.belongsTo(User, {foreignKey: "kakaoId"});

User.hasMany(Promise, {foreignKey: "kakaoId", sourceKey:"kakaoId"});
Promise.belongsTo(Promise, {foreignKey: "kakaoId"});

User.hasMany(Promise, {foreignKey: "kakaoId", sourceKey: "targetId"});
Promise.belongsTo(Promise, {foreignKey: "kakaoId"});
