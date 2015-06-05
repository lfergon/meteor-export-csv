ExportCSV = function() {

};

/**
 * [exportcsv description]
 * @param  {[type]} dataFromCollection [description]
 * @return {[type]}                    [description]
 */
ExportCSV.prototype.exportToCSV = function (dataFromCollection) {
  //console.log(dataFromCollection);
  if (dataFromCollection && dataFromCollection.length === 0) {
    return 'Not a valid array';
  }
  if (dataFromCollection === undefined) {
    return 'No results for the query';
  }
  var str = '';
  var line = '';
  // if (dataFromCollection.length > 0) {
  //   for (var property in dataFromCollection[0]) {
  //     if (dataFromCollection[0].hasOwnProperty(property)) {
  //       line += property + ',';
  //     }
  //   }
  //   str += line.slice(0, -1) + '\r\n';
  // }
  for (var i = 0; i < dataFromCollection.length; i++) {
    var lineFor = '';
    for (var key in dataFromCollection[i]) {
      if (dataFromCollection[i].hasOwnProperty(key)){
        console.log(dataFromCollection[i][key].toString("utf8"));
        lineFor += dataFromCollection[i][key].toString("utf8") + ',';
      }
    }
    line = lineFor.slice(0, -1);
    str += line + '\r\n';
  }
  return str;
};

exportcsv = new ExportCSV();
