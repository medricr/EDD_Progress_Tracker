// Bring in the list of models from the models folder
const db = require('../client/models');

module.exports = {


	// SAVE NEW DAY
	// function (request, respons)
		// set author using request
		// set start time using Date() method
		// set end time to empty string
		// set all other initial values to zero
		// save new day
			// if error, return that error
			// else
				// find user in db and push new day into 'days' array
	saveNewDay: function(req, res){

		console.log('request => ', req.body)
		
		let dayAuthor = req.body.author;
		let start_time = new Date();

		const newDay = new db.Day({
			'author': dayAuthor,
			'start_time': start_time
		})

		newDay.save((err, savedDay)=> {
			if(err){
				return res.json(err);
			}
			db.User.findOneAndUpdate({_id: dayAuthor}, {$push: {days: newDay._id}}, (err, updatedUser)=> {
				if(err){
					return res.json(err);
				}
				return res.json(updatedUser);
			})
		})
	},

	// GET DAYS
	// function (request, response)
		// query database using current user id
		// if user not found
			// return error
		// else
			// query database for all days tied to that user, collecting them into an array
			// if error, return that error
			// else, return the array
	getDays: function(req, res){
		db.User.findById({_id: req.user.id}, (err,matchedUser)=> {
			if(err){
				return res.json(err)
			}
			db.Day.find({_id: {$in: matchedUser.days}}, (err, days)=> {
				if(err){
					return res.json(err)
				}
				return res.json(days);
			});
		});
	},


	// UPDATE FIELD
	// function (request, response)
		// set day id using id in request
		// determine which variable is to be updated using the request
		// find day by id
		// use $inc to increase the total calls and whatever field is to be incremented
		// if error, return that error
		// else, return updated note


	// DELETE DAY
	// function (request, response)
	// set user id and date id variables using request
	// query days collection using day id and delete the day in question
	// if error
		// return that error
	// else 
		// query database using the user id and pull that day from the days array
		// if error, return that error
		// else, return confirmation of deletion
	deleteDay: function(req, res){
		let userId = req.body.currentId;
		let dayId = req.body.dayId;

		db.Day.findOneAndDelete({_id: dayId}).exec((err,deletedDay)=> {
			console.log("entered day deleted")
			if(err){
				return res.json(err)
			}
			db.User.findOneAndUpdate({_id: userId}, {$pull: {days: dayId}}).exec((err, gone)=> {
				console.log("entered user update")
				if(err){
					return res.json(err)
				}
				return res.json(gone);
			})
		})
	}


}