class PastePage {
    get codeTextArea() { return $('#postform-text'); }
    get syntaxSelect() { return $('#postform-format'); }
    get expirationSelect() { return $('#postform-expiration'); }
    get titleInput() { return $('#postform-name'); }
    get submitButton() { return $('//button[@type="submit"]'); }

    open() {
        browser.url('https://pastebin.com');
    }

    createPaste(code, syntax, expiration, title) {
        this.codeTextArea.setValue(code);
        this.syntaxSelect.selectByVisibleText(syntax);
        this.expirationSelect.selectByAttribute('value', expiration);
        this.titleInput.setValue(title);
        this.submitButton.click();
    }

    async validatePaste(title, syntax, code) {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include(title);  // Checks if the page title includes the specified title
    
        const selectedSyntax = await this.syntaxSelect.getText();
        expect(selectedSyntax).to.include(syntax);  // Checks if the selected syntax includes the specified syntax
    
        const actualCode = await this.codeTextArea.getValue();
        expect(actualCode).to.equal(code);  // Checks if the actual code matches the expected code
    }
    
}

export default new PastePage();
