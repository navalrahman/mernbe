const courseModel = require('../models/courseModel')

const getAllcourse = async (req, res) => {
    try {
        const courseData = await courseModel.find()
        if(!courseData){
            res.status(500).json({msg:'notes data not found'})
        }
        res.status(200).json({courseData})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllcourse
}
