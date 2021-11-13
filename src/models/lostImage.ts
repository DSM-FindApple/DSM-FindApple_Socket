import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class LostImage extends Model {
  lostImageId: number;
  lostImageName: string;
}

LostImage.init(
  {
    lostImageId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    lostImageName:{
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "lost_image", tableName: "lost_image" }
);
