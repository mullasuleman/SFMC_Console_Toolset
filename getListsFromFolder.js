var getListsFromFolder = () => {
  window.sfmcLists = window.sfmcLists || [];
  var pageNo = 1;
  console.log("Please wait...");
  var interval = setInterval(() => {
    console.log("Page " + pageNo);
    var rows = document.querySelectorAll(".grp-center.div-center .row");
    var length = rows.length;
    var cols = [];
    document.querySelectorAll(".grp-center.header-center [data-property]").forEach(i => cols.push(i.innerText));

    for (i = 2; i <= length - 1; i++) {
      var folder = document.querySelector(".lg-head-breadcrumb.clearfix").innerText.replaceAll("\n", " ").trim() || "My Lists";
      var deName = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:first-of-type`).innerText;
      var recordCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Subscriber Count") + 1})`).innerText;
      var externalKey = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("External Key") + 1})`).innerText;
      var listID = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("List ID") + 1})`).innerText;

      window.sfmcLists.push({ folder, deName, externalKey, listID, recordCount });
    }

    var nextBtn = document.querySelector(".btn.grid-nextpage");
    if (nextBtn.getAttribute("disabled") == "disabled") {
      clearInterval(interval);
      console.table(window.sfmcLists);
      return;
    }
    nextBtn.click();
    pageNo++;
  }, 5000);
}

getListsFromFolder();