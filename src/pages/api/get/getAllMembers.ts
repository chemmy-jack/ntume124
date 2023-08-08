import mongo from "@/lib/mongodb"

import { memberModel } from "@/lib/models"
import { memberType } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<memberType[]>,
) {
  const temp = await memberModel.findOne({})
  const temp2 = await memberModel.find({})
  console.log(req)
  res.status(200).json(temp2)
}