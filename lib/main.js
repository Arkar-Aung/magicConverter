var self = require("sdk/self");
var cm = require("sdk/context-menu");

cm.Menu({
	label: "Convert to",
	contentScriptFile: [
		self.data.url("uni512zg1.js"),
		self.data.url("zg12uni51.js"),
		self.data.url("magic_converter.js")
	],
	items: [
		cm.Item({ label: "Zawgyi => Uni", data: 1 }),
		cm.Item({ label: "Uni => Zawgyi", data: 2 }),
		cm.Item({ label: "Uni <=> Zawgyi", data: 3 })
	]
});




