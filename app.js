Images = new FS.Collection("images", {stores: [new FS.Store.GridFS('original')]});
Test = new Meteor.Collection("test");

Meteor.startup(function () {
    if (Meteor.isServer) {
        var appleImage;
        if (Images.find().count() === 0) {
            appleImage = Images.insert('http://sprayitaway.com/wp-content/uploads/2013/08/apple_by_grv422-d5554a4.jpg');
        }

        if (Test.find().count() === 0) {
            Test.insert({
                test: appleImage
            });
        }
    }
});

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
