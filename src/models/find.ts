import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class Find extends Model {
  findId: number;
  title: string;
  detailInfo: string;
  findAt: Date;
  writeAt: Date;
  category: Enumerator;
  
}

Find.init(
  {
    findId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    title:{
      type: Sequelize.STRING,
    },
    detailInfo:{
        type: Sequelize.STRING,
    },
    findAt:{
        type: Sequelize.DATE,
    },
    writeAt:{
        type: Sequelize.DATE,
    },
    category:{
        type: Sequelize.ENUM("EAR_PHONE", "CELL_PHONE", "MACHINE", "CLOTHES", "ACC", "WALLET", "CAR"),
    },
    
  },
  { sequelize, modelName: "find", tableName: "find" }
);
