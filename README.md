**API Documentation**

----
    User Login

* **URL**
    /login

* **Method:**
    `POST`

* **Success Response**
    * **Code:** 200 <br />
    **Content:**
    `{
        "message": "Login Success",
        "email": "notre.workspace4@gmail.com",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdHJlLndvcmtzcGFjZTRAZ21haWwuY29tIiwicmVhbE5hbWUiOiJMZWdvIE1pbmlmaWd1cm8iLCJpYXQiOjE2MTgxMTc5ODh9.qvtz_0J56BUNcZA-b0qr-8kBBVYdcDxWKrG_LyvKg9U"
    }`

* **Error Response:**
    * **Code:** 500 <br />
    **Content:** `{ message: 'Login Failed' }`

----
    Returns all current user data

* **URL**
    /showUserData

* **Method:**
    `GET`

* **Success Response:**
    * **Code:** 200 <br />
    **Content:** 
    `{ 
        "snapshotData": {
            "age": "23",
            "email": "notre.workspace4@gmail.com",
            "gender": "male",
            "password": "$2b$15$CyBHGIHtbTSxeZC9AYOiPeGobRkrdFQHTae3lS0KKiR/vcZ2k8aWm",
            "phoneNumber": "081369998522",
            "realName": "Lego Minifiguro"
        }
    }`

* **Error Response:**
    * **Code:** 500 <br />
    **Content:** `{ message: 'Error!' }`


* **ENV Files**
    SECRET=helloachiko
    SALT=15