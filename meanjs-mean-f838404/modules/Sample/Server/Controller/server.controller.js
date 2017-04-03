
var path = require('path'),
errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
mongoose = require('mongoose'),
U = mongoose.model('usersDetail');
var Q = require('q');

var ifUserPresent = function (mailId) {
	return U.findOne({User_Mailid : mailId}).exec();
};


exports.Register = function(req,res,next){


	var mail = req.body.User_Mailid;

	var UserInsert = new U(req.body);

	Q.when(ifUserPresent(mail),function(isPresent){
		if(isPresent){
			console.log("Error");
			res.send("Maild id already Present");
		}else{
			UserInsert.save(function(err){
				if(err){
					console.log("Error");
					res.status('400').send({message:errorHandler.getErrorMessage(err)
					});
				} else{
					console.log("Succ");
					res.json(UserInsert);
				}
			});
		}

	});
};



exports.Login = function(req,res){
	console.log(req.body);
	Q.when(ifUserPresent(req.body.User_Name),function(isPresent){
		console.log(isPresent);
		if(isPresent){
			if(isPresent.User_Password === req.body.User_Password){
				res.send(isPresent);

			}else{
				res.send("Password wrong");
			}
			//retrieve password and match with it
		}else{
			res.send("Register to login");
			console.log("Register to login");
		}
	});

};

exports.DeleteDetails = function(req,res){

	console.log(req.body);
	var mail = req.body.User_Mailid;

	U.remove({'User_Mailid' : mail},function(err,UserRemoved){
		if(err){
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}else{

			res.send("Removed");
		}
	});

};


exports.UpdateDetails = function(req,res){

	var mail = req.body.User_Mailid;
	console.log(mail);
	U.update({'User_Mailid' : mail},{$set: {'User_FirstName' : req.body.User_FirstName , 'User_LastName' : req.body.User_LastName ,'User_Password': req.body.User_Password ,'User_Number' : req.body.User_Number}},function(err,Updated){
		if(err){
				console.log(err);
		}else{
			console.log("Updated");
			res.send("Updated");
		}
	});
};
