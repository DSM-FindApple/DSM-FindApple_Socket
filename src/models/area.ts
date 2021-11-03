import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class Area extends Model {
  areaCode: number;
  latitude: number;
  longitude: number;
  
}

Area.init(
  {
    areaCode: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    latitude:{
      type: Sequelize.DOUBLE,
    },
    longtitude:{
      type: Sequelize.DOUBLE
    }
  },
  { sequelize, modelName: "area", tableName: "area" }
);
