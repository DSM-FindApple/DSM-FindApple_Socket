import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class FindImage extends Model {
  findImageId: number;
  imageName: string;
}

FindImage.init(
  {
    findId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    imageName:{
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "find_image", tableName: "find_image" }
);
