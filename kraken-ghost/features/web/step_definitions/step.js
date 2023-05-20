const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('console');
const { reverse } = require('lodash');
const expect = require('chai').expect;

/* START CREAR PAGINA FUNCIONALIDAD */

/* START Helpers for all Escenarios */
Given, When('I navigate to page {kraken-string} {kraken-string}', async function (host, page) {
    return await this.driver.url(host+page);
});

Given('I login with {kraken-string} {kraken-string}', async function (email, password) {
    let elementEmail = await this.driver.$('.email.ember-text-field');
    await elementEmail.setValue(email);
    let elementPassword = await this.driver.$('.password.ember-text-field');
    await elementPassword.setValue(password);
    let elementButton = await this.driver.$('button.login');
    return await elementButton.click();
});

When('I click pages', async function() {
    let element = await this.driver.$("[href='#/pages/']");
    return await element.click();
});

When, Then('I reload', async function () {
    await this.deviceClient.browser.refresh();
});
/* END Helpers for all Escenarios */

/* START Create a new page */

When('I click filter type', async function() {
    let element = await this.driver.$("div.gh-contentfilter-menu.gh-contentfilter-type");
    return await element.click();
});

When('I click Draft type', async function() {
    let element = await this.driver.$("div.ember-basic-dropdown-content.ember-power-select-dropdown ul.ember-power-select-options li:nth-child(2)");
    return await element.click();
});

When('I click new page', async function() {
    let element = await this.driver.$("[href='#/editor/page/']");
    return await element.click();
});

When('I create a page with {kraken-string} {kraken-string}', async function(title, description) {
    let elementTitle = await this.driver.$(".gh-editor-title.ember-text-area");
    await elementTitle.click();
    await elementTitle.setValue(title);
    let elementDescription = await this.driver.$(".koenig-editor__editor-wrapper");
    await elementDescription.click();
    return await elementDescription.setValue(description);
});

When('I publish it now', async function() {
    let elementPublishDropDown = await this.driver.$(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    await elementPublishDropDown.click();
    let elementPublishButton = await this.driver.$(".gh-publishmenu-footer .gh-publishmenu-button");
    return await elementPublishButton.click();
});

When('I publish it schedule', async function() {
    let elementPublishDropDown = await this.driver.$(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    await elementPublishDropDown.click();
    let elementSchedule = await this.driver.$(".gh-publishmenu-section div.gh-publishmenu-radio:nth-child(2) .gh-publishmenu-radio-content .gh-publishmenu-radio-label");
    await elementSchedule.click();
    let elementPublishButton = await this.driver.$(".gh-publishmenu-footer .gh-publishmenu-button");
    return await elementPublishButton.click();
});

When('I get back to page list', async function() {
    let elementbackButton = await this.driver.$("[href='#/pages/']");
    return await elementbackButton.click();
});
/* END Create a new page */

When('I edit the page with {kraken-string}', async function(newDescription) {
    let elementDescription = await this.driver.$(".koenig-editor__editor-wrapper");
    await elementDescription.click();
    await elementDescription.setValue(' '+ newDescription);
    let elementPublishDropDown = await this.driver.$(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    await elementPublishDropDown.click();
    let elementPublishButton = await this.driver.$(".gh-publishmenu-footer .gh-publishmenu-button");
    return await elementPublishButton.click();
});

When('I click page settings', async function() {
    let element = await this.driver.$("button.post-settings");
    return await element.click();
});

When('I click delete page', async function() {
    let element = await this.driver.$("button.gh-btn-hover-red.settings-menu-delete-button");
    return await element.click();
});

When('I click delete page modal', async function() {
    let modalElement = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await modalElement.click();
});


/* Check thens */
Then('I check if the page was created with the name {kraken-string}', async function(title) {
    let pageName = await this.driver.$("h1.post-full-title").getText();
    return expect(pageName).to.equal(title);
});

Then('I check if the page was edited with {kraken-string}', async function(descriptionEdit) {
    let pageName = await this.driver.$("div.post-content p").getText();
    return expect(pageName).to.contain(descriptionEdit);
});

Then('I check if the page was deleted', async function() {
    let pageName = await this.driver.$("p.error-description").getText();
    return expect(pageName).to.contain('Page not found');
});

Then('I check if it is schedule', async function() {
    let elementPublishDropDown = await this.driver.$(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    await elementPublishDropDown.click();
    let pageName = await this.driver.$("header.gh-publishmenu-heading").getText();
    return expect(pageName).to.contain('Will be published in');
});

Then('I check if Draft is {kraken-string} first', async function(title) {
    let draftTitle = await this.driver.$("main.gh-main section.content-list ol li:nth-child(2) h3.gh-content-entry-title").getText();
    return expect(draftTitle).to.contain(title);
});

/* /Check thens */

/* END CREAR PAGINA FUNCIONALIDAD */

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
})

When('I click newTag', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I enter tagname {kraken-string}', async function (text) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(text);
})

When('I enter tagdescription {kraken-string}', async function (tagdescription) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(tagdescription);
})

When('I click savetag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click pruebaCreacion', async function () {
    let element = await this.driver.$('h3.gh-tag-list-name=AAAAAAAAAA Tag prueba');
    return await element.click();
})

When('I enter tagnameeditado {kraken-string}', async function (tagnameeditado1) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagnameeditado1);
})

When('I click pagina', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
})

When('I click nuevapagina', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
})

When('I enter titulopagina {kraken-string}', async function (titulopagina1) {
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.setValue(titulopagina1);
})

When('I click eliminartag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');
    return await element.click();
})

When('I click confirmareliminaciontag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click leavetag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red"]');
    return await element.click();
})


/* START Posts steps */

When('I click Posts menu', async function() {
    let element = await this.driver.$(".gh-nav-list-new > a[href='#/posts/']");
    return await element.click();
});

When('I click in New post', async function() {
    let element = await this.driver.$('.gh-nav-new-post');
    return await element.click();
});

When('I write in post title {kraken-string}', async function (text) {
    let element = await this.driver.$('.gh-editor-title');
    return await element.setValue(text);
});

When('I Write in post text {kraken-string}', async function (text) {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.setValue(text);
});

When('I click in Publish', async function() {
    let element = await this.driver.$('.gh-publishmenu');
    return await element.click();
});

When('I click Schedule it for later', async function() {
    let element = await this.driver.$(".//*//div[contains(@class, 'gh-publishmenu-radio')]//*//div[text() = 'Schedule it for later']");
    return await element.click();
});

When('I click Schedule button', async function() {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
    

});

When('I click in Publish button', async function() {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});

When('I click in Cancel button', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-outline.gh-btn-link');
    return await element.click();
});

When('I click in Posts', async function() {
    let element = await this.driver.$('.blue.link.fw4.flex.items-center.ember-view');
    return await element.click();
});

When('I click published posts menu', async function() {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=published']");
    return await elementPostsButton.click();
});

When('I click scheduled posts menu', async function() {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=scheduled']");
    return await elementPostsButton.click();
});

When('I click draft posts menu', async function() {
    let elementPostsButton = await this.driver.$("a[href='#/posts/?type=draft']");
    return await elementPostsButton.click();
});

When('I click in a Post', async function() {
    let element = await this.driver.$('.gh-list-row');
    return await element.click();
});

When('I select the post with title {kraken-string}', async function (postTitle) {
    let element = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + postTitle + "']");
    return await element.click();
});

When('I click post settings', async function () {
    let element = await this.driver.$(".post-settings");
    return await element.click();
});

When('I click delete post', async function () {
    let element = await this.driver.$("button.settings-menu-delete-button");
    return await element.click();
});

When('I click confirm delete post', async function () {
    let element = await this.driver.$(".modal-content > .modal-footer > .gh-btn-red");
    return await element.click();
});

When('I delete the post', async function () {
    let menuButton = await this.driver.$("button.post-settings");
    await menuButton.click();
    let deleteButton = await this.driver.$("button.settings-menu-delete-button");
    return await deleteButton.click();
    
});

/* START Thens POST */

Then('I check Post with title {kraken-string} is in the list', async function (postTitle) {
    let element = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + postTitle + "']");
    return expect(await element.isExisting()).to.be.true;
});

Then('I check Post with title {kraken-string} is not in the list', async function (postTitle) {
    let element = await this.driver.$(".//*//ol[contains(@class, 'posts-list')]//*//h3[text() = '" + postTitle + "']");
    return expect(await element.isExisting()).to.be.false;
});

/* END POST steps */

When('I click staff', async function() {
    let element = await this.driver.$('a[href="#/staff/"]');
    return await element.click();
})

When('I click invite', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-green"]');
    return await element.click();
})


When('I enter mailinvita {kraken-string}', async function (emailinvita) {
    let element = await this.driver.$('input[name="email"]');
    return await element.setValue(emailinvita);
});


When('I select role {kraken-string}', async function (role) {
    let element = await this.driver.$('select[name="role"]');
    await element.click;
    let element2 = await this.driver.$('option[value="'+role+'"]')
    return await element2.click;
});

When('I click invitenow', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click usuario', async function() {
    let element = await this.driver.$('a[href="#/staff/pruebas/"]');
    return await element.click();
})

When('I enter fullname {kraken-string}', async function (fullname) {
    let element = await this.driver.$('input[id="user-name"]');
    return await element.setValue(fullname);
});

When('I click savename', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click revoke', async function() {
    let element = await this.driver.$('a[href="#revoke"]');
    return await element.click();
})

When('I click General', async function() {
    let element = await this.driver.$('a[href="#/settings/general/"]');
    return await element.click();
})

When('I click expand', async function() {
    let element = await this.driver.$('button[class="gh-btn"]');
    return await element.click();
})

When('I enter title {kraken-string}', async function (title) {
    let element = await this.driver.$('div.gh-setting-content-extended div.form-group .ember-text-field');
    return await element.setValue(title);
});

When('I enter descripcion {kraken-string}', async function (descripcion) {
    let element= await this.driver.$('div.gh-setting-content-extended div.description-container .ember-text-field');
    return await element.setValue(descripcion);
});

When('I click savegeneral', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click checkbox', async function() {
    let element = await this.driver.$('label[class="switch"]');
    return await element.click();
})

Then('I check Name with fullname {kraken-string} is in the list', async function (fullname) {
    let element = await this.driver.$(".//*//article[contains(@class, 'apps-card-app')]//*//h3[text() = '" + fullname + "']");
    return expect(await element.isExisting()).to.be.true;
});



When('I click post-settings', async function() {
    let element = await this.driver.$('button[class="post-settings"]');
    return await element.click();
});

When('I click tag-list', async function() {
    let element = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]');
    return await element.click();
});

When('I click tag-element', async function() {
    let element = await this.driver.$(".//*//li[text() = '" + "AAAAAAAAAA Tag prueba" + "']");
    return await element.click();
});

When('I click close-post-settings', async function() {
    let element = await this.driver.$('button[class="close settings-menu-header-action"]');
    return await element.click();
});

When('I click publish-after-tag', async function() {
    let element = await this.driver.$('div.gh-publishmenu-trigger');
    return await element.click();
});

When('I click confirm-publish-after-tag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    return await element.click();
});

When('I click return-posts', async function() {
    let element = await this.driver.$('a[class="blue link fw4 flex items-center ember-view"]');
    return await element.click();
});

When('I click internal-tags', async function() {
    let element = await this.driver.$('section.view-actions div.gh-contentfilter button:last-child');
    return await element.click();
});

Then('I check tag name {kraken-string}', async function (sametagname) {
    let tagname = await this.driver.$("h3.gh-tag-list-name").getText();
    return expect(tagname).to.equal(sametagname);
});


Then('I check tag description {kraken-string}', async function (differenttagdescription) {
    let tagdescription = await this.driver.$("p.gh-tag-list-description").getText();
    return expect(tagdescription).to.not.equal(differenttagdescription);
});

