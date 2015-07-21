# export-csv 
Meteor export mongo collection to csv

# Meteor methods server side

```JavaScript
download: function() {
  var collection = CollectionToExtract.find().fetch();
  var heading = true; // Optional, defaults to true
  var delimiter = ";" // Optional, defaults to ",";
  return exportcsv.exportToCSV(collection, heading, delimiter);
}
```

# JavaScript file, client side

```JavaScript
//events
'click #buttonDownload': function(event) {
  var nameFile = 'fileDownloaded.csv';
  Meteor.call('download', function(err, fileContent) {
    if(fileContent){
      var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
      saveAs(blob, nameFile);
    }
  });
```

# Known issues

- Documents need to have an identical length of elements.
- Objects are not displayed (export JSON instead).
