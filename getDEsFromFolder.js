var getDEFromFolder = () => {
  window.sfmcDEs = window.deList || [];
  var pageNo = 1;
  console.log("Please wait...");
  var interval = setInterval(() => {
    console.log("Page " + pageNo);
    var rows = document.querySelectorAll(".grp-left.div-left .row");
    var length = rows.length - 1;
    var cols = [];
    document.querySelectorAll(".grp-center.header-center [data-property]").forEach(i => cols.push(i.innerText));

    for (i = 2; i <= length; i++) {
      var folder = document.querySelector(".dg-head-breadcrumb.clearfix").innerText.replaceAll("\n", " ").trim() || "Data Extensions";
      var deName = document.querySelector(`.grp-left.div-left .row:nth-of-type(${i}) .cell:last-of-type`).innerText;
      var sendable = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Sendable") + 1})`).innerText;
      var recordCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Record Count") + 1})`).innerText;
      var fieldCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Field Count") + 1})`).innerText;
      var externalKey = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("External Key") + 1})`).innerText;

      window.sfmcDEs.push({ folder, deName, externalKey, sendable, fieldCount, recordCount });
    }

    var nextBtn = document.querySelector(".btn.grid-nextpage");
    if (nextBtn.getAttribute("disabled") == "disabled") {
      clearInterval(interval);
      console.table(window.sfmcLists);
      return;
    }
    nextBtn.click();
    pageNo++;
  }, 1000);
}

getDEFromFolder();