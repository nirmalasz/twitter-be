const Timeline = require('../models/tweet.model.js');

async function getTimeline(req, res) {
    try {
        const timelineData = await Timeline.find().limit(15);
        res.status(200).json({
            message: Timeline,
            timeline: timelineData
        });
    } catch (error) {
        res.status(500).json("Failed to show timeline.");
    }
}

module.exports = {
    getTimeline,
};