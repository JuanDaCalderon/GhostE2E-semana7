class PagesPage {
    elements = {
        navBarPageDriver: () => cy.get("a[href='#/pages/']"),
        newPageButton: () => cy.get(".view-actions a[href='#/editor/page/']"),
        titleInputPage: () => cy.get('.gh-editor-title.ember-text-area'),
        descriptionInputPage: () => cy.get('.koenig-editor__editor-wrapper'),
        dropdownPublish: () => cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger'),
        publishButton: () => cy.get('.gh-publishmenu-footer .gh-publishmenu-button'),
        scheduleOption: () => cy.get('.gh-publishmenu-section div.gh-publishmenu-radio:nth-child(2) .gh-publishmenu-radio-content .gh-publishmenu-radio-label'),

        settingsPageMenu: () => cy.get('button.post-settings'),
        closeSettingsPageMenu: () => cy.get('button.close.settings-menu-header-action'),
        deleteButtonPageMenu: () => cy.get('button.settings-menu-delete-button'),
        deleteButtonModal: () => cy.get('.modal-content > .modal-footer > .gh-btn-red'),

        buttonFilter: () => cy.get('div.gh-contentfilter-menu.gh-contentfilter-type'),
        draftFilterOption: () => cy.get('div.ember-basic-dropdown-content.ember-power-select-dropdown ul.ember-power-select-options li:nth-child(2)'),

        outsideClickElement: () => cy.get('.gh-koenig-editor-pane'),
        urlInput: () => cy.get('input.post-setting-slug')
    }

    goToAnchorButtonPage() {
        cy.wait(1000)
        this.elements.navBarPageDriver().click();
        cy.wait(1000)
    }

    goToNewPage() {
        cy.wait(1000)
        this.elements.newPageButton().click();
        cy.wait(1000)
    }

    goToNewPageFromListPageView() {
        cy.wait(1000)
        this.elements.navBarPageDriver().click();
        this.elements.newPageButton().click();
        cy.wait(1000)
    }

    typeTitle(title) {
        cy.wait(1000)
        this.elements.titleInputPage().clear().type(title);
        cy.wait(1000)
    }

    typedescription(description) {
        cy.wait(1000)
        this.elements.descriptionInputPage().click();
        this.elements.descriptionInputPage().type(description, { parseSpecialCharSequences: false });
        cy.wait(1000)
    }

    typeTitleAndDescription(title, description) {
        cy.wait(1000)
        if (title !== '') {
            this.elements.titleInputPage().clear().type(title, { parseSpecialCharSequences: false });
        }
        if (description !== '') {
            this.elements.descriptionInputPage().clear().type(description, { parseSpecialCharSequences: false });
        }
        cy.wait(1000)
    }

    publishPage() {
        cy.wait(1000)
        this.elements.dropdownPublish().click();
        this.elements.publishButton().click();
        cy.wait(1000)
    }

    schedulePage() {
        cy.wait(1000)
        this.elements.dropdownPublish().click();
        cy.wait(1000)
        this.elements.scheduleOption().click();
        cy.wait(1000)
        this.elements.publishButton().click();
        cy.wait(1000)
    }

    changeUrlTo(url) {
        cy.wait(1000);
        this.elements.settingsPageMenu().click();
        this.elements.urlInput().clear().type(url, { parseSpecialCharSequences: false });
        this.elements.closeSettingsPageMenu().click();
        cy.wait(1000);
    }


    deletePage() {
        cy.wait(1000)
        this.elements.settingsPageMenu().click();
        this.elements.deleteButtonPageMenu().click();
        cy.wait(1000)
        this.elements.deleteButtonModal().click();
        cy.wait(1000)
    }

    clickOnRedModalButton() {
        cy.wait(1000)
        this.elements.deleteButtonModal().click();
        cy.wait(1000)
    }

    clickOnEspecificPage(page) {
        cy.wait(1000)
        page.click();
        cy.wait(1000)
    }

    cleanRecentPage(pageToBeClean) {
        cy.wait(1000)
        pageToBeClean.click();
        this.deletePage();
        cy.wait(1000)
    }

    goToDraftFilter() {
        cy.wait(1000)
        this.elements.buttonFilter().click();
        this.elements.draftFilterOption().click();
        cy.wait(1000)
    }
}

module.exports = new PagesPage();