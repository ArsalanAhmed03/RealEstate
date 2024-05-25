const express = require('express');
const port = 80;
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use('/styles',express.static(__dirname+'/styles'));

app.use('/images',express.static(__dirname+'/images'));

app.use('/src',express.static(__dirname+'/src'));

app.use('/scripts',express.static(__dirname+'/scripts'));

app.use('/fonts',express.static(__dirname+'/fonts'));

const public_dir = path.join(__dirname,'src');

app.set('views', path.join(__dirname, 'src'));

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:public_dir});
})

app.get('/BUY',(req,res)=>{
    res.sendFile('buy.html',{root:public_dir});
})

app.get('/RENT',(req,res)=>{
    res.sendFile('rent.html',{root:public_dir});
})

app.get('/INVEST',(req,res)=>{
    res.sendFile('invest.html',{root:public_dir});
})

app.get('/SELL',(req,res)=>{
    res.sendFile('sell.html',{root:public_dir});
})

app.get('/SIGNUP',(req,res)=>{
    res.sendFile('signup.html',{root:public_dir});
})

app.listen(port,()=>{
    console.log(`The server ${port} has been connected`);
})

app.post('/search',(req,res)=>{
    const search_term = req.body.search_term;
    console.log(search_term); 
    res.redirect('/');
});

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password); 
    res.redirect('/');
});

app.post('/signup',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const Country = req.body.Country;
    const City = req.body.City;
    
    console.log(email);
    console.log(password); 
    res.redirect('/');
    
});

