var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userDetails = new Schema({
	User_FirstName : {
		type:String,
		default:'',
		trim:true
	},

	User_LastName : {
		type:String,
		default:'',
		trim:true
	},

	User_Mailid : {
		type:String,
		default: '',
		trim:true
	},

	User_Password : {
		type:String,
		default: '',
		trim:true
	},

	User_Number : {
		type:Number,
		default: '',
		trim:true
	},
});

mongoose.model('usersDetail', userDetails);