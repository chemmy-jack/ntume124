export type memberType = {
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
	MDF: Number
};

export type adminType = {
	id: String,
}

export type logType = {
	timeStamp: Date,
	admin: String,
	action: String,
	description: String,
}

export type machineType = {
	name: String,
	base: String,
	valid: Boolean,
	queue: [String],
}