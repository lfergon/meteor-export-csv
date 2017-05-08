ExportCSV = function() {

};

/**
 * [exportcsv description]
 * @param  {[type]} dataFromCollection [description]
 * @return {[type]}                    [description]
 */
ExportCSV.prototype.exportToCSV = function (dataFromCollection, heading, delimiter) {
  heading = heading ? heading : false;
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

  // Insert heading values
  if (heading) {
    var heading = Object.keys(dataFromCollection[0])
    str += heading.join(delimiter) + "\r\n"
  }

  // Generate CSV
  for (var i = 0; i < dataFromCollection.length; i++) {
    var lineFor = '';
    for (var key in heading) {
      //console.log(heading[key]);
      if (dataFromCollection[i].hasOwnProperty(heading[key])){
        var data = dataFromCollection[i][heading[key]];
        var dataString;

        if (typeof data === 'number')
          dataString = data.toString();
        else
          dataString = data.toString("utf8");

        if (dataString.length === 0) {
          lineFor += delimiter;
        } else if (typeof data === 'object') {

          // Object is date
          if (Object.prototype.toString.call(data) === '[object Date]') {
            lineFor += data.toISOString() + delimiter
          } else {
            lineFor += Object.prototype.toString.call(data) + delimiter;
            //lineFor += "[Object Object]" + delimiter;
          }
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
