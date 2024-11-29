const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    tweet: {
        type: String,
        required: true
    }
});

const Timeline = mongoose.model("tweets", timelineSchema);

module.exports = Timeline;
