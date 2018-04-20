/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("Url property is defined & not empty", function () {
            allFeeds.forEach(function (item) {
                // Test if this object has url property
                expect(item.hasOwnProperty("url")).toBeTruthy();
                // Test if this url property has a value other than undefined
                expect(item.url).toBeDefined();
                // Test if this url property has a value of other than null
                expect(item.url).not.toBeNull();
                // Test if this url property has a length other than 0
                expect(item.url.length).not.toBe(0);
            });
        });


        it("name property is  defined & not empty", function () {
            allFeeds.forEach(function (item) {
                // Test if this object has name property
                expect(item.hasOwnProperty("name")).toBeTruthy();
                // Test if this name property has a value other than undefined
                expect(item.name).toBeDefined();
                // Test if this name property has a value of other than null
                expect(item.name).not.toBeNull();
                // Test if this name property has a length other than 0
                expect(item.name.length).not.toBe(0);
            });
        });
    });


    describe("The menu", function () {
        it("menu is hidden", function () {
            // To be sure the the body element has the class menu-hidden
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        it("action when click", function () {
            menuIcon = $('.menu-icon-link');
            // Click on the menuIcon to show the menu
            $(menuIcon).trigger("click");
            // To be sure that the body element doesn't have the class menu-hidden
            expect($("body").hasClass("menu-hidden")).toBeFalsy();
            // Click on the menuIcon to hide the menu
            $(menuIcon).trigger("click");
            // To be sure that the body element has the class menu-hidden
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    });


    describe("Initial Entries", function () {
        beforeEach(function (done) {
            // To run loadfeed before the test
            loadFeed(0, done);
        });

        it("at least one .entry in .feed", function (done) {
            // To be sure that there is at least one .entry
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
        });
    });


    describe("New Feed Selection", function () {
        let feed0l = 0;
        let feed1l = 0;
        beforeEach(function(done){
            loadFeed(0, function(){
                // Get the first entry in the first feed
                feed0l = $(".feed .entry").get(0);
                loadFeed(2, function() {
                // Get the first entry in the second feed
                    feed1l = $(".feed .entry").get(0);
                    done();
                });
            });
        });

        it("content changed", function(done) {
            // To be sure the the two entries is different
            expect(feed0l).not.toBe(feed1l);
            done();
        });
    });
}());
