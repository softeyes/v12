var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment')
var data = [{
        name: 'Midgar',
        image: 'http://thelifestream.net/wp-content/uploads/2009/12/ff7_midgar_1024x768.jpg',
        description: 'Shina HQ ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla posuere, porta nunc non, vestibulum ante. Sed sodales nulla finibus metus maximus, a dignissim dui mattis. Ut imperdiet libero a cursus placerat. Nulla eu risus sed justo fringilla ornare id id lacus. Fusce sed dapibus tellus. Donec dolor augue, hendrerit sit amet consectetur vel, auctor ut nisi. Nam nec nisl velit. Nulla porttitor sapien eget lobortis eleifend. Pellentesque vel nunc nisl. Aliquam id feugiat augue. Quisque ut rutrum dolor, vel ultricies metus. Nunc rhoncus magna sed lacus tempus, eu viverra massa tempor. Fusce non finibus risus, eget dapibus lacus. Sed eu nisi sapien. Duis felis odio, finibus ac lorem vitae, eleifend ultrices mauris.'
    },
    {
        name: 'Chocobo Ranch',
        image: 'https://i.ytimg.com/vi/1wWLaSp-n6k/maxresdefault.jpg',
        description: 'Breed a gold Chocobo! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla posuere, porta nunc non, vestibulum ante. Sed sodales nulla finibus metus maximus, a dignissim dui mattis. Ut imperdiet libero a cursus placerat. Nulla eu risus sed justo fringilla ornare id id lacus. Fusce sed dapibus tellus. Donec dolor augue, hendrerit sit amet consectetur vel, auctor ut nisi. Nam nec nisl velit. Nulla porttitor sapien eget lobortis eleifend. Pellentesque vel nunc nisl. Aliquam id feugiat augue. Quisque ut rutrum dolor, vel ultricies metus. Nunc rhoncus magna sed lacus tempus, eu viverra massa tempor. Fusce non finibus risus, eget dapibus lacus. Sed eu nisi sapien. Duis felis odio, finibus ac lorem vitae, eleifend ultrices mauris.'
    },
    {
        name: 'Gold Saucer',
        image: 'https://i.ytimg.com/vi/OKub_mnrGiQ/maxresdefault.jpg',
        description: 'Fun for kids and adults. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla posuere, porta nunc non, vestibulum ante. Sed sodales nulla finibus metus maximus, a dignissim dui mattis. Ut imperdiet libero a cursus placerat. Nulla eu risus sed justo fringilla ornare id id lacus. Fusce sed dapibus tellus. Donec dolor augue, hendrerit sit amet consectetur vel, auctor ut nisi. Nam nec nisl velit. Nulla porttitor sapien eget lobortis eleifend. Pellentesque vel nunc nisl. Aliquam id feugiat augue. Quisque ut rutrum dolor, vel ultricies metus. Nunc rhoncus magna sed lacus tempus, eu viverra massa tempor. Fusce non finibus risus, eget dapibus lacus. Sed eu nisi sapien. Duis felis odio, finibus ac lorem vitae, eleifend ultrices mauris.'
    }
]

function seedDB() {
    // Remove all campgrounds
    // Campground.remove({}, function (err) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log('Removed campgrounds!');

        // // Add a few campgrounds
        // data.forEach(function (seed) {
        //     Campground.create(seed, function (err, data) {
        //         if (err) {
        //             console.log(err)
        //         } else {
        //             console.log('Added a campground!');
        //             // Create a comment
        //             Comment.create({
        //                 text: 'This is a great place',
        //                 author: 'Tifa Lockhart'
        //             }, function (err, comment) {
        //                 if (err) {
        //                     console.log(err);
        //                 } else {
        //                     data.comments.push(comment);
        //                     data.save();
        //                     console.log('Created new comment!');
        //                 }
        //             });
        //         }
        //     })
        // });
    // });
};

module.exports = seedDB;