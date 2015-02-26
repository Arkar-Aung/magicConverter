var regexMM = new RegExp("[\u1000-\u109f\uaa60-\uaa7f]+");
var regexUni = new RegExp("[ဃငဆဇဈဉညဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]|ည်း|ျင်း|င်|န်း|ျာ|င့်");

self.on("click", function (node, type) {
	if (node.value != null) {
		node.value = convertIt(node.value, type, true);
	} else if (node.innerHTML != null) {
		node.innerHTML = convertIt(node.innerHTML, type, false);
	}
});

function convertIt(text, type, flag) { // flag to identify input or not
	if (! regexMM.test(text)) {
		return text;
	} else if (type == 1) {
		return Z1_Uni(text);
	} else if (type == 2) {
		return Uni_Z1(text);
	} else {
		if (regexUni.test(text)) {
			return (flag) ? "-- UNICODE VERSION -- \n" + text + "\n\n" + "-- ZAWGYI VERSION -- \n" + Uni_Z1(text) : Uni_Z1(text);
		} else {
			return (flag) ? "-- UNICODE VERSION -- \n" + Z1_Uni(text) + "\n\n" + "-- ZAWGYI VERSION -- \n" + text : Z1_Uni(text);
		}
	}
}