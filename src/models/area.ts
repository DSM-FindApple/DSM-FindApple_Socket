import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";
import { Find } from "./find";
import { Lost } from "./lost";

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

Area.hasOne(Lost, { foreignKey: "areaCode", sourceKey: "areaCode" });
Lost.belongsTo(Area, { foreignKey: "areaCode" });

Area.hasOne(Find, { foreignKey: "areaCode", sourceKey: "areaCode" });
Find.belongsTo(Area, { foreignKey: "areaCode" });
