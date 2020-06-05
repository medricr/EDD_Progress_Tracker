const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotes = require('./buttonNames.json');

mongoose.promise = Promise;

const DaySchema = new Schema({
	_id: Schema.Types.ObjectId,
	total_calls: {type: Number, default: 0},
	sucessful_calls: {type: Number, default: 0},
	high_call_volume: {type: Number, default: 0},
	queue_too_long: {type: Number, default: 0},
	dead_air: {type: Number, default: 0},
	feedback_loop: {type: Number, default: 0},
	busy_signal: {type: Number, default: 0},
	start_time: {type: String, default: ""},
	end_time: {type: String, default: ""},
	header_quote: {type: String, default: ""},
	author: {type: Schema.Types.ObjectId, ref: 'User'}
});

DaySchema.pre('save', function(next){

	console.log('daySchema pre hook entered');
	console.log(this);
	console.log(this.content);
	let num = Math.floor(Math.random() * quotes.length);
	this.header_quote = quotes[num];
	this._id = new mongoose.Types.ObjectId();
	next();
});

const Day = mongoose.model('Day', DaySchema);

module.exports = Day;