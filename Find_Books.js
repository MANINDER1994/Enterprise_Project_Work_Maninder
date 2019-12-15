
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  
  dbo.collection("Books").find({}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});