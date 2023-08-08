import mongo from "@/lib/mongodb"

import { adminModel } from "@/lib/models"
import { adminType } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<adminType[]>,
) {
  const temp = await adminModel.findOne({})
  const temp2 = await adminModel.find({})
  console.log(req)
  res.status(200).json(temp2)
}