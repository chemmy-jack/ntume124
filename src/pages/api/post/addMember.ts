import mongo from "@/lib/mongodb"

import { memberModel } from "@/lib/models"
import { memberType } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next"

mongo.connect()


type Data = {
	message: any,
	body?: any,
	error?: any,
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	let body: any

	if (req.method !== 'POST') {
		res.status(405).send({ message: 'Only POST requests allowed, not inserted', body: req.body })
		return
	}

	// check body is json
	try {
		body = JSON.parse(req.body)
	} catch (e) {
		body = req.body
		res.status(405).send({ message: 'body not json, not inserted', body: req.body })
		return
	}

	//check id not already in collection
	const temp1 = await memberModel.findOne({ id: body.id })
	if (Object.keys(temp1).length != 0) {
		res.status(405).send({ message: 'repeated id, not inserted', body: temp1 })
		return
	}
	const temp2 = await memberModel.insertMany([body])
	res.status(200).send({ message: 'inserted', body: temp2 })

}