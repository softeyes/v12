var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./models/user')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var seedDB = require('./seeds');

// requiring routes
var commentRoutes = require('./routes/comments')
var campgroundRoutes = require('./routes/campgrounds')
var indexRoutes = require('./routes/index')

var port = 4800;

mongoose.connect("mongodb://localhost:27800/yelp_camp_v12");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // serves everything in the public directory such as STYLESHEETS
app.use(methodOverride('_method'));
app.use(flash());

// seed the database
seedDB(); // THIS IS ADDING IN 3 DIFFERENT CAMPGROUNDS, EACH WITH A COMMENT

// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'Made in Abyss',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) { // This app.use will call the function within the app.use in every single route so you don't need to include currentUser: req.user in every route!!!!!
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
})

app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes); // adding the '/campgrounds' PREFIX upends '/campgrounds' in the campgrounds.js code. 
app.use('/', indexRoutes);

app.listen(port, function () {
    console.log('YelpCamp server has started.')
})