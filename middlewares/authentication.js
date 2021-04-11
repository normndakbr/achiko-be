const { verifyToken } = require('../helpers/jsonwebtoken')
const userReference = require('../config/firebaseAdmin')

async function authentication(request, response, next) {
    const access_token = request.headers.access_token

    try {
        if (!access_token) {
            throw ({ name: 'AuthenticationFailed' })
        } else {
            const decoded = verifyToken(access_token)
            let user

            userReference.on('value', snapshot => {
                user = snapshot.val()
                if (!user) {
                    throw ({ name: 'AuthenticationFailed' })
                } else {
                    request.loggedInUser = decoded
                    next()
                }
            })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = authentication
