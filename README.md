# export-csv 
Meteor export mongo collection to csv

# Meteor methods server side

    download: function() {
      return exportcsv.exportToCSV(CollectionToExtract.find().fetch());
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
