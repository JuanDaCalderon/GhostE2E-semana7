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
        publishCloseModalButon: () => cy.get('.gh-btn-outline'),
        
        settingsPostMenu: () => cy.get('button.settings-menu-toggle'),
        deleteButtonPostMenu: () => cy.get('button.settings-menu-delete-button'),
        deleteButtonModal: () => cy.get('.modal-content > .modal-footer > .gh-btn-red'),

        postReturnButton: () => cy.get('.ml3'),

        selectPublishedButton: () => cy.get("a[href='#/posts/?type=published']"),
        selectScheduledButton: () => cy.get("a[href='#/posts/?type=scheduled']"),
        selectDraftButton: () => cy.get("a[href='#/posts/?type=draft']"),

        postTitleFieldList: () => cy.get('h3.gh-content-entry-title')       
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
}

module.exports = new PostsPage();