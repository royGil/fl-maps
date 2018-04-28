describe("Able to display dochead correctly at each distinct application page", function() {
  describe("Given any user @watch", function() {
    before(function() {
      browser.url("localhost:3000");
      browser.pause(1000); //wait for app to load
    });
    it("should be able to show correct dochead on map page", function() {
      expect(browser.waitForExist("#welcome-screen"));
      const dochead = browser.element("head");
      expect(dochead.waitForExist("title"));
      expect(dochead.waitForExist("title=FocalLocal Public Happiness Map"));
      expect(dochead.waitForExist("meta[name=description]"));
      expect(
        dochead.getAttribute("meta[name=description]", "content")
      ).to.equal(
        "The FocalLocal Public Happiness Movement, for a happier, safer, and more connected place for everybody. Find public happiness events happening around you using this map."
      );
      expect(dochead.waitForExist("meta[name=robots]"));
      expect(dochead.getAttribute("meta[name=robots]", "content")).to.equal(
        "all"
      );
      expect(dochead.waitForExist("meta[http-equiv=Content-Type]"));
      expect(
        dochead.getAttribute("meta[http-equiv=Content-Type]", "content")
      ).to.equal("text/html; charset=utf-8");
    });
  });
});
