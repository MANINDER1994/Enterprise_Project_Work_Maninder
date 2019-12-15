
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  var myData = { Category_Name: 'Literature' };
  var newData = { $set: {Total_Books: '100', Category_Name: 'Poetry' } };
  dbo.collection("Books_Category").updateOne(myData,newData, function(err, res) {
    if (err) throw err;
    console.log(" 1 document is updated successfully");
    db.close();
  });
});