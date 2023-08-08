import mongoose from "mongoose";
const Schema = mongoose.Schema;

const logSchema = new Schema({
	timeStamp: Date,
	admin: String,
	action: String,
	description: String,
});

const memberSchema = new Schema({
	id: String,
	name: String,
	mainCertificate: Boolean,
	quiz: Boolean,
	UniversalLazerCut: Boolean,
	Kingssel3DP: Boolean,
	Infinity3DP: Boolean,
	EscrewDriver: Boolean,
	engraving: Boolean,
	Edrill: Boolean,
	drillBit: Boolean,
	MDF: Number,
});

const adminSchema = new Schema({
	id: String,
});

const machineSchema = new Schema({
	name: String,
	base: String,
	valid: Boolean,
	queue: [String],
})



let logModel: mongoose.Model<any>
let memberModel: mongoose.Model<any>
let adminModel: mongoose.Model<any>
let machineModel: mongoose.Model<any>



if (mongoose.models["logs"]) logModel = mongoose.model("logs");
else logModel = mongoose.model("logs", logSchema);

if (mongoose.models["members"]) memberModel = mongoose.model("members");
else memberModel = mongoose.model("members", memberSchema);

if (mongoose.models["admins"]) adminModel = mongoose.model("admins");
else adminModel = mongoose.model("admins", adminSchema);

if (mongoose.models["machines"]) machineModel = mongoose.model("machines")
else machineModel = mongoose.model("machines", machineSchema)




export { memberModel, adminModel, logModel, machineModel }
