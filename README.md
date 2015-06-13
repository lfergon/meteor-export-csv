# export-csv 
Meteor export mongo collection to csv

# Meteor methods server side

  <code>
    download: function() {
      return exportcsv.exportToCSV(CollectionToExtract.find().fetch());
    }
  </code>

# JavaScript file, client side

  <code>
    //events
    'click #buttonDownload': function(event) {
      var nameFile = 'fileDownloaded.csv';
      Meteor.call('download', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }
      });
  </code>
