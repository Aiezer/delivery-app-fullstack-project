const { user } = require('../../database/models/User')

const loginAdmin = async (email, password) => {
    const findAdmin = await user.findOne({ where: email })
}