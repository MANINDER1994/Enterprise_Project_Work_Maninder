
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  var deleteData = { First_Name: 'Sarah',Last_Name: 'Williams' };
 
  dbo.collection("Authors").deleteOne(deleteData,function(err, res) {
    if (err) throw err;
    console.log(" 1 document deleted!!");
    db.close();
  });
});