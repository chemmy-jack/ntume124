import mongo from "@/lib/mongodb"

import { logModel } from "@/lib/models"
import { logType } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<logType[]>,
) {
  const temp = await logModel.findOne({})
  const temp2 = await logModel.find({})
  console.log(req)
  res.status(200).json(temp2)
}