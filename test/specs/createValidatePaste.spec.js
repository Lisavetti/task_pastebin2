import PastePage from "../pageobjects/paste.page";

describe('Pastebin paste creation and validation', function () {
    it('should create a new paste and validate attributes', function () {
        const code = `git config --global user.name "New Sheriff in Town"
git reset \$(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
        const syntax = 'Bash';
        const expiration = '10M';
        const title = 'how to gain dominance among developers';

        PastePage.open();
        PastePage.createPaste(code, syntax, expiration, title);
        browser.pause(2000); // Pause to allow page load and redirection

        PastePage.validatePaste(title, syntax, code);
    });
});
