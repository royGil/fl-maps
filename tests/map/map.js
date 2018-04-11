

describe('Map functionality @watch', function () {

  describe('As any user...', function () {
    describe('Able to close get started introduction', function () {
      before(function () {
        browser.url('http://localhost:3000');
        browser.pause(300);
      });
      it('should be able to navigate to map', function () {
        expect(browser.getUrl()).to.contain('localhost:3000');
      });
      it('should be able to see map welcome ', function () {
        expect(browser.waitForExist('#welcome-screen')).to.be.true;
      });
      it('should be able to see close and begin');
    });
  });
});
