class ApiDataPool {
    async getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    async getRandomFirstName() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].first_name;
    }

    async getRandomLastName() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].last_name;
    }

    async getRandomEmail() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].email;
    }

    async getRandomPassword() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].password;
    }

    async getRandomShortSentence() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].short_sentence;
    }

    async getRandomLongSentence() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].long_sentence;
    }

    async getRandomNumbers() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].numbers;
    }

    async getRandomNaughty() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        const index = await this.getRandomIndex(10);
        return dataPool[index].Naughty;
    }
}


module.exports = new ApiDataPool();