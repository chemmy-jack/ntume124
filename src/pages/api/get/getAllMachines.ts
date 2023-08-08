import mongo from "@/lib/mongodb"

import { machineModel } from "@/lib/models"
import { machineType } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<machineType[]>,
) {
  const temp = await machineModel.findOne({})
  const temp2 = await machineModel.find({})
  console.log(req)
  res.status(200).json(temp2)
}