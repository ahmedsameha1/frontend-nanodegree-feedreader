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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

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


    /* TODO: Write a new test suite named "The menu" */

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    describe("The menu", function () {
        it("menu is hidden", function () {
            // To be sure the the body element has the class menu-hidden
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
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

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe("Initial Entries", function () {
        beforeEach(function (done) {
            // To run loadfeed before the test
            loadFeed(0, done);
        });

        it("at least one .entry in .feed", function (done) {
            // To be sure that there is at least one .entry
            expect($(".feed").has(".entry").length).toBeGreaterThan(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    describe("New Feed Selection", function () {
        // Save the number of entries initially
        let num_entries = $(".feed").has(".entry").length;
        beforeEach(function (done) {
            // To be sure to run loadFeed method before the test
            loadFeed(0, done);
        });
        it("content changed", function (done) {
            // To be sure that the number of entries is different
            expect($(".feed").has(".entry").length).not.toBe(num_entries);
            done();
        });
    });
}());
