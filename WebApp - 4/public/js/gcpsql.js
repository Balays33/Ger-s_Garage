    // Require gcloud
    var gcloud = require('google-cloud');

    // Enable Storage
    var gcs = gcloud.storage({
      projectId: 'grape-spaceship-123',
      keyFilename: '/path/to/keyfile.json'
    });

    // Reference an existing bucket.
    var bucket = gcs.bucket('my-existing-bucket');

    // Upload a local file to a new file to be created in your bucket.
    bucket.upload('/photos/zoo/zebra.jpg', function(err, file) {
      if (!err) {
        // "zebra.jpg" is now in your bucket.
      }
    });

    // Download a file from your bucket.
    bucket.file('giraffe.jpg').download({
      destination: '/photos/zoo/giraffe.jpg'
    }, function(err) {});
    

function test(){
    window.alert("working the js file");



    
}

