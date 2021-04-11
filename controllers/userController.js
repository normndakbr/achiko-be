const { comparePassword, hashPassword } = require('../helpers/bcrypt')
const { loginToken } = require('../helpers/jsonwebtoken')
const firebase = require('../firebaseConfig')
const userReference = require('../config/firebaseAdmin')

class userController {
    static register(request, response, next) {
        //const userId = userReference.push().key
        let hashPass = hashPassword(request.body.password)
        const payload = {
            email: request.body.email,
            password: hashPass,
            realName: request.body.realName,
            gender: request.body.gender,
            age: request.body.age,
            phoneNumber: request.body.phoneNumber
        }

        try {
            userReference.set(payload)
            response.status(201).json({
                message: "Register Successfull"
            })
        } catch (error) {
            response.status(500).json({
                message: "Register unsuccessfull"
            })
        }
    }

    static login(request, response) {
        let snapshotData
        const payload = {
            email: request.body.email,
            password: request.body.password
        }
        try {
            userReference.on('value', snapshot => {
                snapshotData = snapshot.val()

                if (!snapshotData) {
                    throw ({ message: "Data Nof Found" })
                } else if (!comparePassword(payload.password, snapshotData.password)) {
                    throw ({ message: "Wrong Password" })
                } else {
                    const access_token = loginToken({
                        email: snapshotData.email,
                        realName: snapshotData.realName
                    })
                    response.status(200).json({
                        message: 'Login Success',
                        email: snapshotData.email,
                        access_token: access_token
                    })
                }
            })

        } catch {
            response.status(500).json({
                message: 'Login Failed'
            })
        }

    }

    static async showUserData(request, response, next) {

    }
}

module.exports = userController