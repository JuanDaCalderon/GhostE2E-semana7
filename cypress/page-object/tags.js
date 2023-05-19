class TagsTag {
    elements = {
        tagButtonMain: () => cy.get('a[href="#/tags/"]'),
        newTagButton: () => cy.get('a[href="#/tags/new/"]:first'),
        enterTagName: () => cy.get('#tag-name'),
        enterTagDescription: () => cy.get('#tag-description'),
        saveTag: () => cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]'),
        tagButtonTags: () => cy.get('li:has(a[href="#/tags/"])'),
        findTag: () => cy.contains('h3.gh-tag-list-name'),
        deleteTag: () => cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]'),
        confirmDeleteTag: () => cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'),
        internalTagsButton: () => cy.get('section.view-actions div.gh-contentfilter button:last-child'),
        leaveTags: () => cy.get('button[class="gh-btn gh-btn-red"]')
    }

    goToTagButtonMain(){
        cy.wait(1000)
        this.elements.tagButtonMain().click();
        cy.wait(1000)
    }

    goToNewTagButton(){
        cy.wait(1000)
        this.elements.newTagButton().click();
        cy.wait(1000)
    }

    enterTagName(name){
        cy.wait(1000)
        this.elements.enterTagName().type(name);
        cy.wait(1000)
    }

    enterTagDescription(description){
        cy.wait(1000)
        this.elements.enterTagDescription().type(description)
    }

    goToSaveTag(){
        cy.wait(1000)
        this.elements.saveTag().click();
        cy.wait(1000)
    }

    goToTagButtonTags(){
        cy.wait(1000)
        this.elements.tagButtonTags().click();
        cy.wait(1000)
    }

    findTag(){
        cy.wait(1000)
        this.elements.findTag
        cy.wait(1000)
    }

    goToDeleteTag(){
        cy.wait(1000)
        this.elements.deleteTag().click();
        cy.wait(1000)
    }

    goToConfirmDeleteTag(){
        cy.wait(1000)
        this.elements.confirmDeleteTag().click();
        cy.wait(1000)
    }

    goToInternalTagsButton(){
        cy.wait(1000)
        this.elements.internalTagsButton().click();
        cy.wait(1000)
    }

    goToleaveTags(){
        cy.wait(1000)
        this.elements.leaveTags().click();
        cy.wait(1000)
    }

    cleanRecentTag(tagToBeClean) {
        cy.wait(1000)
        tagToBeClean.click();
        this.elements.deleteTag().click();
        cy.wait(1000)
        this.elements.confirmDeleteTag().click();
    }

    cleanRecentBigTag() {
        cy.wait(1000)
        this.elements.deleteTag().click();
        cy.wait(1000)
        this.elements.confirmDeleteTag().click();
    }

}

module.exports = new TagsTag();