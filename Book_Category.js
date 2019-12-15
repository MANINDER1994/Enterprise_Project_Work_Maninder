
// Maninder Kaur (C0744403)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  var myData = [
    { Category_Id: 'C1', Category_Name: 'Literature', Total_Books: '50', Shelf_No: 'S1'},
	{ Category_Id: 'C2', Category_Name: 'IT Books', Total_Books: '150', Shelf_No: 'S2'},
    { Category_Id: 'C3', Category_Name: 'Novel', Total_Books: '230', Shelf_No: 'S3'},
    { Category_Id: 'C4', Category_Name: 'Auto-Biography', Total_Books: '80', Shelf_No: 'S4'},
    { Category_Id: 'C5', Category_Name: 'Horror', Total_Books: '70', Shelf_No: 'S5'}
    ];
  dbo.collection("Books_Category").insertMany(myData, function(err, res) {
    if (err) throw err;
    console.log(res.insertedCount+ " documents are inserted in table");
    db.close();
  });
});