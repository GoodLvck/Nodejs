//
const users = query('SELECT * FROM Users');
//

query('SELECT * FROM Users', function(err, users){
    if (err){
        console.log(err);
    }
    if (users) {
        console.log(users);
    }
});