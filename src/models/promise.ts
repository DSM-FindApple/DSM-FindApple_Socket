import Sequelize, { Model } from "sequelize";
import { sequelize } from "../config/config";

export class Promise extends Model {
  promiseId: number;
  discript: string;
  meetAt: Date;
  isAccept: Boolean;
  areaCode: number;
  kakaoId: number;
  targetId: number;
}

Promise.init(
  {
    promiseId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
    },
    discript:{
      type: Sequelize.STRING,
    },
    meetAt:{
        type: Sequelize.DATE,
    },
    isAccept:{
        type: Sequelize.BOOLEAN,
    },
    areaCode:{
        type: Sequelize.NUMBER,
        field: "areaCode",
    },
    kakaoId:{
        type: Sequelize.NUMBER,
        field: "kakaoId",
    },
    targetId:{
        type: Sequelize.NUMBER,
        field:"targetId"
    }
  },
  { sequelize, modelName: "promise", tableName: "promise" }
);