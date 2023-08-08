import mongo from "@/lib/mongodb"

import { logModel } from "@/lib/models"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()


type Data = {
  data: String
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // const temp = await memberModel.findOne({})
  // const temp2 = await memberModel.find({})
  console.log(req)
  res.status(200).json({ data: "test response" })
}