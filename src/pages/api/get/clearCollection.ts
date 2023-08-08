import mongo from "@/lib/mongodb"

import { memberModel, adminModel } from "@/lib/models"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()


type Data = {
  result: String,
  currentCollection: any
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req)
  // const temp = await memberModel.deleteMany()
  res.status(200).json({
    // result: temp ? "success" : "fail",
    // currentCollection: temp
    result: "this api does not do anything currently",
    currentCollection: null
  })
}