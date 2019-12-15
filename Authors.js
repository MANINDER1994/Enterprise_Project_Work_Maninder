
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  var myData = [
    { Author_Id: 'A1', First_Name: 'George', Last_Name: 'Walker'},
	{ Author_Id: 'A2', First_Name: 'John', Last_Name: 'Smith'},
    { Author_Id: 'A3', First_Name: 'Alice', Last_Name: 'King'},
    { Author_Id: 'A4', First_Name: 'William', Last_Name: 'Shakspeare'},
    { Author_Id: 'A5', First_Name: 'David', Last_Name: 'Rowling'},
	{ Author_Id: 'A6', First_Name: 'Sarah', Last_Name: 'Williams'}
    ];
  dbo.collection("Authors").insertMany(myData, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount+ " documents are inserted in table");
    db.close();
  });
});