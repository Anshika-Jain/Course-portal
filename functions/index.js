const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const serviceAccount = require('./serviceAccount.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sep-testkit-2.firebaseio.com"
});

// const db = admin.firestore()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, "../public")))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// auth
app.get('/login', (req, res) => {
    res.render('auth/signin')
})

app.get('/signup', (req, res) => {
    res.render('auth/signup')
})

// client
app.get('/courses', (req, res) => {
    res.render('client/courses')
})

app.get('/details', (req, res) => {
    res.render('client/details')
})

app.get('/home', (req, res) => {
    res.render('client/home')
})

app.get('/quesbank', (req, res) => {
    res.render('client/quesbank')
})

app.get('/result', (req, res) => {
    res.render('client/result')
})

app.get('/testkit', (req, res) => {
    res.render('client/test')
})

// admin
app.get('/admin/createcourse', (req, res) => {
    res.render('admin/createcourse')
})

app.get('/admin/createtest', (req, res) => {
    res.render('admin/createtest')
})

app.get('/admin/index/1', (req, res) => {
    res.render('admin/index')
})

app.get('/admin/index/2', (req, res) => {
    res.render('admin/index2')
})

app.get('/admin/index/3', (req, res) => {
    res.render('admin/index3')
})

app.get('/admin/result', (req, res) => {
    res.render('admin/result')
})

app.get('/admin/viewcourse', (req, res) => {
    res.render('admin/viewcourse')
})

app.get('/admin/viewcoursetable', (req, res) => {
    res.render('admin/viewcoursetable')
})

app.get('/admin/viewtest', (req, res) => {
    res.render('admin/viewtest')
})

app.get('/admin/viewtesttable', (req, res) => {
    res.render('admin/viewtesttable')
})

exports.testApi = functions.https.onRequest(app)

exports.addAdminRole = functions.https.onCall((data, context) => {
    // check request is made by an admin
    if (context.auth.token.admin !== true) {
        return {
            error: 'Only admins can add other admins'
        }
    }
    // get user and add admin custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
        // save in firestore for ease of access
        db.collection("admins").doc(user.uid)
            .set({
                isAdmin: true,
                isHead: false
            }).catch(err => {
                return err
            })
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin.`
        }
    }).catch(err => {
        return err
    })
})