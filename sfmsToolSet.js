
var tf = null;

var getDEFieldList = () => {

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

// getDEFieldList();

var getDESchema = () => {

	var mtf = (t) => {
		let d = new Blob(t, { type: 'text/csv' });
		if (tf !== null) window.URL.revokeObjectURL(tf);
		tf = window.URL.createObjectURL(d);
		return tf;
	};

	var df = (s) => {
		var fn = document.querySelector("#op-head-name-static").value;
		var l = document.createElement('a');
		l.setAttribute('download', `Schema_${fn}.csv`);
		l.href = mtf(s);
		l.click();
	};

	if (document.querySelectorAll(".de-content-fields-listings").length <= 0)
		return "No Data Extension Found............................... Change console context to iframe 'Email' ⇓";
	var fl = [];
	var dp = document.querySelector(".lg-head-breadcrumb").innerText.replaceAll("\n", " ");
	var dn = document.querySelector("#op-head-name-static").value;
	var dk = document.querySelector(".carb-input-popover.op-key-pop").value;
	fl.push("Path: ," + dp + ",,,,\n");
	fl.push("DE Name: ," + dn + ",,,,\n");
	fl.push("External Key: ," + dk + ",,,,\n");
	fl.push(",,,,,\n");
	fl.push("Field Name,Data Type,Length,Primary Key,Nullable,Default Value\n");
	var defl = document.querySelectorAll(".de-content-fields-listing").length - 1;
	document.querySelectorAll(".de-content-fields-listing").forEach((x, i) => {
		if (i == defl) return;
		fl.push(
			x.querySelector(".de-listing-name-view").innerText + "," +
			x.querySelector(".de-content-listing-txt span").innerText + "," +
			x.querySelector(".de-listing-length-view").innerText + "," +
			(x.querySelector(".de-content-listing-primary input").checked ? "Yes" : "") + "," +
			(x.querySelector(".de-content-listing-nullable input").checked ? "Yes" : "No") + "," +
			x.querySelector(".de-content-listing-dvalue-view").innerText + "\n"
		);
	});
	if (fl.length > 0) df(fl)
	return "Downloading file...";
}

// getDESchema();
