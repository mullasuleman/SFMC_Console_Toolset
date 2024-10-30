var getDEFieldList = () => {
	var tf = null;

	var mtf = (t) => {
		var d = new Blob([t], { type: 'text/csv' });
		if (tf !== null) window.URL.revokeObjectURL(tf);
		tf = window.URL.createObjectURL(d);
		return tf;
	};

	var df = (s) => {
		console.log("Field List: \n\n" + s);
		var fn = "fieldList_" + document.querySelector("#op-head-name-static").value;
		var l = document.createElement('a');
		l.setAttribute('download', `${fn}.csv`);
		l.href = mtf(s);
		l.click();
	};

	if (document.querySelectorAll(".de-content-fields-listings").length <= 0)
		return "No Data Extension Found............................... Change iframe context to Email ⇓";
	var fl = [];
	document.querySelectorAll(".de-listing-name-view").forEach(i => fl.push(i.innerText));
	if (fl.length > 0) df(fl.join())
	return "Downloading file...";
}

getDEFieldList();
