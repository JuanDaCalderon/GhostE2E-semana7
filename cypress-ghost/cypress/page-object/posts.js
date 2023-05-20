class PostsPage {
    elements = {
        navBarPostDriver: () => cy.get(".gh-nav-list-new > a[href='#/posts/']"),
        newPostButton: () => cy.get('.gh-nav-new-post'),
        titleInputPost: () => cy.get('.gh-editor-title'),
        descriptionInputPost: () => cy.get('.koenig-editor__editor'),
        dropdownPublish: () => cy.get('.gh-publishmenu'),
        publishButton: () => cy.get('.gh-publishmenu-button'),
        scheduleOption: () => cy.get('.gh-publishmenu-radio').contains('Schedule it for later').click(),
        publishOrScheduleModalButton: () => cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'),
        publishCloseModalButon: () => cy.get('.gh-btn.gh-btn-outline.gh-btn-link'),
        
        settingsPostMenu: () => cy.get('button.post-settings'),
        deleteButtonPostMenu: () => cy.get('button.settings-menu-delete-button'),
        deleteButtonModal: () => cy.get('.modal-content > .modal-footer > .gh-btn-red'),

        postReturnButton: () => cy.get('.blue.link.fw4.flex.items-center.ember-view'),

        selectPublishedButton: () => cy.get("a[href='#/posts/?type=published']"),
        selectScheduledButton: () => cy.get("a[href='#/posts/?type=scheduled']"),
        selectDraftButton: () => cy.get("a[href='#/posts/?type=draft']"),
        featureFilter: () => cy.get('.ember-power-select-selected-item').contains('All post'),
        featureFilterOption: () => cy.get('.ember-power-select-option').contains('Featured posts'),

        postTitleFieldList: () => cy.get('h3.gh-content-entry-title'),
    
        excerptField: () => cy.get('#custom-excerpt'),
        featureCheckbox: () => cy.get('p').contains('Feature this'),
        deleteAuthorButton: () => cy.get('span.ember-power-select-multiple-remove-btn > svg '),
        authorInput: () => cy.get('.ember-power-select-trigger-multiple-input').last(),
        authorAlert: () => cy.get('p').contains('At least one author is required.'),

        publishDateInput: () => cy.get('.gh-date-time-picker-date '),
        publishDateAlert: () => cy.get(".gh-date-time-picker-error"),

        closeSettingsButton: () => cy.get('button.close.settings-menu-header-action')
        
    }

    goToAnchorButtonPost() {
        cy.wait(1000)
        this.elements.navBarPostDriver().click();
        cy.wait(1000)
    }

    goToListPostView() {
        cy.wait(1000)
        this.elements.postReturnButton().click();
        cy.wait(1000)
    }
    goToNewPost() {
        cy.wait(1000)
        this.elements.newPostButton().click();
        cy.wait(1000)
    }

    goToNewPostFromListPostView() {
        cy.wait(1000)
        this.elements.navBarPostDriver().click();
        this.elements.newPostButton().click();
        cy.wait(1000)
    }

    typeTitleAndDescription(title, description) {
        cy.wait(1000)
        this.elements.titleInputPost().clear().type(title);
        this.elements.descriptionInputPost().clear().type(description);
        cy.wait(1000)
    }

    clearTitleAndTypeDescription(description) {
        cy.wait(1000)
        this.elements.titleInputPost().clear();
        this.elements.descriptionInputPost().clear().type(description);
        cy.wait(1000)
    }

    typeTitleAndClearDescription(title) {
        cy.wait(1000)
        this.elements.titleInputPost().clear().type(title);
        this.elements.descriptionInputPost().clear();
        cy.wait(1000)
    }

    clickFeatureCheckbox() {
        cy.wait(1000)
        this.elements.featureCheckbox().click({force:true});
        cy.wait(1000)
    }

    deleteCurrentAuthor() {
        cy.wait(1000)
        this.elements.deleteAuthorButton().click();
        cy.wait(1000)
    } 

    typeAuthor(author) {
        cy.wait(1000)
        this.elements.authorInput().type(author);
        cy.wait(1000)
    }

    checkAuthorAlertExists () {
        this.elements.authorAlert().should('exist');
    } 

    openPulishDropDown() {
        cy.wait(1000)
        this.elements.dropdownPublish().click();
        cy.wait(1000)
    }

    publishPost() {
        cy.wait(1000)
        this.elements.publishButton().click();
        cy.wait(1000)
    }

    publishPostModal() {
        cy.wait(1000)
        this.elements.publishOrScheduleModalButton().click();
        cy.wait(1000)
    }

    closeScheduleModal() {
        cy.wait(1000)
        this.elements.publishCloseModalButon().click();
        cy.wait(1000)
    }

    schedulePost() {
        cy.wait(1000)
        this.elements.scheduleOption().click();
        cy.wait(1000)
    }

    goToSettingsMenu(){
        cy.wait(1000)
        this.elements.settingsPostMenu().click();
        cy.wait(1000)
    }

    deletePost() {
        cy.wait(1000)
        this.elements.settingsPostMenu().click();
        this.elements.deleteButtonPostMenu().click();
        cy.wait(1000)
    }

    deletePostModal() {
        cy.wait(1000)
        this.elements.deleteButtonModal().click();
        cy.wait(1000)
    }

    clickExcerptfield() {
        cy.wait(1000)
        this.elements.excerptField().click();
        cy.wait(1000)
    }

    typeExcerpt(excerpt) {
        cy.wait(1000)
        this.elements.excerptField().clear().type(excerpt);
        cy.wait(1000)
        this.elements.closeSettingsButton().click();
        cy.wait(1000)
    }

    typePublishDateInput(date) {
        cy.wait(1000)
        this.elements.publishDateInput().clear().type(date);
        cy.wait(1000)
    }

    clickCloseSettingsButton() {
        cy.wait(1000)
        this.elements.closeSettingsButton().click();
        cy.wait(1000)
    }
   
    checkExcerptMessageAlert() {
        cy.wait(1000)
        cy.get('p').contains('Excerpt cannot be longer than 300 characters.').should('exist');
        cy.wait(1000)
    }

    checkPublishDateMessageAlert(state) {
        cy.wait(1000)
        cy.get(this.elements.publishDateAlert()).contains('Invalid date format, must be YYYY-MM-DD').should(state);
        cy.wait(1000)
    }

    confirmExitNewPostPage() {
        cy.wait(1000)
        cy.get('button.gh-btn.gh-btn-red').click();
        cy.wait(1000)
    }

    clickOnSpecificPost(Post) {
        cy.wait(1000)
        Post.click();
        cy.wait(1000)
    }

    cleanRecentPost(PostToBeClean) {
        cy.wait(1000)
        PostToBeClean.click();
        this.deletePost();
        cy.wait(1000)
    }

    goToPublishedFilter() {
        cy.wait(1000)
        this.elements.selectPublishedButton().click();
        cy.wait(1000)
    }

    goToScheduledFilter() {
        cy.wait(1000)
        this.elements.selectScheduledButton().click();
        cy.wait(1000)
    }

    goToDraftFilter() {
        cy.wait(1000)
        this.elements.selectDraftButton().click();
        cy.wait(1000)
    }
 
    goToFeaturedFilter() {
        cy.wait(1000)
        this.elements.featureFilter().click();
        cy.wait(1000)
        this.elements.featureFilterOption().click();
        cy.wait(1000)
    }

    validateDeletedPost(title) {
 
        cy.get("body").then($body => {
                cy.get(".gh-date-time-picker-error").should('not.exist');     
        });
    }

    validatepublishDateAlert() {

        cy.get("form").then($form => {
            if ($form.find("h3.gh-content-entry-title").length > 0) {   
                cy.get("h3.gh-content-entry-title").contains(title).should('not.exist');
            }
        });
    }
    
    validatePostinList(title) {
        cy.get("h3.gh-content-entry-title").contains(title).should('exist');
    }

}


module.exports = new PostsPage();