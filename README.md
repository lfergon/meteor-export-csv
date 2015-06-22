# export-csv 
Meteor export mongo collection to csv

# Meteor methods server side

    download: function() {
      var collection = CollectionToExtract.find().fetch();
      var delimiter = ";" // Optional, defaults to ",";
      return exportcsv.exportToCSV(collection, delimiter);
    }

# JavaScript file, client side

    //events
    'click #buttonDownload': function(event) {
      var nameFile = 'fileDownloaded.csv';
      Meteor.call('download', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      });
