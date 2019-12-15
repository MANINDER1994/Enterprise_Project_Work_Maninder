
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  var myData = [
    { Book_Id: 'B1', Book_Title: 'War and Peace', Publication_Date: '2012-03-21', Author_Id: 'A1', Category_Id: 'C4', Language_id: 'Lg1'},
	{ Book_Id: 'B2', Book_Title: 'On the Road', Publication_Date: '1998-10-02', Author_Id: 'A2', Category_Id: 'C3', Language_id: 'Lg2'},
    { Book_Id: 'B3', Book_Title: 'Programming in Java', Publication_Date: '1993-12-23', Author_Id: 'A3', Category_Id: 'C2', Language_id: 'Lg1'},
    { Book_Id: 'B4', Book_Title: 'Hamlet', Publication_Date: '2002-01-09', Author_Id: 'A4', Category_Id: 'C1', Language_id: 'Lg5'},
    { Book_Id: 'B5', Book_Title: 'Learn MongoDb', Publication_Date: '1995-09-10', Author_Id: 'A5', Category_Id: 'C2', Language_id: 'Lg1'}
    ];
  dbo.collection("Books").insertMany(myData, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount+ " documents are inserted in table");
    db.close();
  });
});