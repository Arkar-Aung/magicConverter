var MagicConverter = {
	_regexMM : new RegExp("[\u1000-\u109f\uaa60-\uaa7f]+"),
	_regexUni : new RegExp("[ဃငဆဇဈဉညဋဌဍဎဏဒဓနဘရဝဟဠအ]်|ျ[က-အ]ါ|ျ[ါ-း]|\u103e|\u103f|\u1031[^\u1000-\u1021\u103b\u1040\u106a\u106b\u107e-\u1084\u108f\u1090]|\u1031$|\u1031[က-အ]\u1032|\u1025\u102f|\u103c\u103d[\u1000-\u1001]|ည်း|ျင်း|င်|န်း|ျာ|င့်"),
	convertIt : function (text, type, flag) {
		if (! this._regexMM.test(text)) {
			return text;
		} else if (type == 1) {
			return Z1_Uni(text);
		} else if (type == 2) {
			return Uni_Z1(text);
		} else {
			if (this._regexUni.test(text)) {
				return (flag) ? "-- UNICODE VERSION -- \n" + text + "\n\n" + "-- ZAWGYI VERSION -- \n" + Uni_Z1(text) : Uni_Z1(text);
			} else {
				return (flag) ? "-- UNICODE VERSION -- \n" + Z1_Uni(text) + "\n\n" + "-- ZAWGYI VERSION -- \n" + text : Z1_Uni(text);
			}
		}		
	}
};

self.on("click", function (node, type) {
	if (node.value != null) {
		node.value = MagicConverter.convertIt(node.value, type, true);
	} else if (node.textContent != null) {
		node.textContent = MagicConverter.convertIt(node.textContent, type, false);
	}
});
