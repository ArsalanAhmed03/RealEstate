const express = require('express');
const port = 80;
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const users = require("./models/user.model.js");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use('/styles', express.static(__dirname + '/styles'));

app.use('/images', express.static(__dirname + '/images'));

app.use('/src', express.static(__dirname + '/src'));

app.use('/scripts', express.static(__dirname + '/scripts'));

app.use('/fonts', express.static(__dirname + '/fonts'));

const public_dir = path.join(__dirname, 'src');

app.set('views', path.join(__dirname, 'src'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: public_dir });
})

app.get('/BUY', (req, res) => {
    res.sendFile('buy.html', { root: public_dir });
})

app.get('/RENT', (req, res) => {
    res.sendFile('rent.html', { root: public_dir });
})

app.get('/INVEST', (req, res) => {
    res.sendFile('invest.html', { root: public_dir });
})

app.get('/SELL', (req, res) => {
    res.sendFile('sell.html', { root: public_dir });
})

app.get('/SIGNUP', (req, res) => {
    res.sendFile('signup.html', { root: public_dir });
})

mongoose.connect('mongodb://localhost:27017/RealEstate').then(() => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`The server ${port} has been connected`);
    })
}).catch(() => {
    console.log("Database not connected");
});

app.post('/search', (req, res) => {
    const search_term = req.body.search_term;
    console.log(search_term);
    res.redirect('/');
});

app.post('/validate-email', async (req, res) => {
    const email = req.body.email;
    const PHN = req.body.PHN;
    const user = await users.findOne({ Email: email });
    if (user) {
        return res.status(400).json({ message: 'Email already in use' });
    }
    else {
        const user1 = await users.findOne({ PhoneNumber: PHN });
        if (user1) {
            return res.status(500).json({ message: 'Phone Number already in use' });
        }
        res.status(200).json({ message: 'Email Phone Number available' });
    }
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await users.find({ Email: email, Password: password });
    if (user.length == 0) {
        console.log("No Such User Found");
    }
    else {
        console.log(user[0].name);
        console.log(password);
    }

    res.redirect('/');
});


app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.fullname;
    const PhoneNumber = req.body.phone;
    const Emirates = req.body.emirate;
    const City = req.body.city;
    const Address = req.body.address;
    const POBox = req.body.pobox;
    const Nationality = req.body.nationality;
    const DOB = req.body.dob;
    const Gender = req.body.gender;
    const PreferredLanguage = req.body.language;

    const user = users({
        name: username,
        Email: email,
        Password: password,
        PhoneNumber: PhoneNumber,
        Emirates: Emirates,
        City: City,
        Address: Address,
        POBox: POBox,
        Nationality: Nationality,
        DOB: new Date(DOB),
        Gender: Gender,
        PreferredLanguage: PreferredLanguage
    });

    await user.save();
    res.redirect('/');

});

