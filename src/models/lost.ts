import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";
import { LostImage } from "./lostImage";

export class Lost extends Model {
    lostId: number;
    title: string;
    area: any;
    detailInfo: string;
    lostAt: Date;
    writeAt: Date;
    category: Enumerator;
}

Lost.init(
  {
    lostId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    title:{
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "lost", tableName: "lost" }
);

Lost.hasMany(LostImage, { foreignKey: "lostId", sourceKey: "lostId" });
LostImage.belongsTo(Lost, { foreignKey: "findId" });