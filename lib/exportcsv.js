ExportCSV = function() {

};

/**
 * [exportcsv description]
 * @param  {[type]} dataFromCollection [description]
 * @return {[type]}                    [description]
 */
ExportCSV.prototype.exportToCSV = function (dataFromCollection, delimiter) {
  delimiter = delimiter ? delimiter : ",";
  
  if (dataFromCollection && dataFromCollection.length === 0) {
    return 'Not a valid array';
  }
  if (dataFromCollection === undefined) {
    return 'No results for the query';
  }
  var str = '';
  // var line = '';
  // if (dataFromCollection.length > 0) {
  //   for (var property in dataFromCollection[0]) {
  //     if (dataFromCollection[0].hasOwnProperty(property)) {
  //       line += property + delimiter;
  //     }
  //   }
  //   str += line.slice(0, -1) + '\r\n';
  // }
  for (var i = 0; i < dataFromCollection.length; i++) {
    var lineFor = '';
    for (var key in dataFromCollection[i]) {
      if (dataFromCollection[i].hasOwnProperty(key)){
        var data = dataFromCollection[i][key];
        var dataString;

        if (typeof data === 'number')
          dataString = data.toString();
        else
          dataString = data.toString("utf8");

        if (dataString.length === 0) {
          lineFor += delimiter;
        } else if (typeof data === 'object') {
          lineFor += "[Object Object]";
        }else {
          lineFor += dataString + delimiter;
        }
      }
    }
    line = lineFor.slice(0, -1);
    str += line + '\r\n';
  }
  return str;
};

exportcsv = new ExportCSV();
