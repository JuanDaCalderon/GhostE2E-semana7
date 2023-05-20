class ApiDataPool {

    async getRandomFirstName() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.first_name;
    }

    async getRandomLastName() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.last_name;
    }

    async getRandomEmail() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.email;
    }

    async getRandomPassword() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.password;
    }

    async getRandomShortSentence() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.short_sentence;
    }

    async getRandomLongSentence() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.long_sentence;
    }

    async getRandomNumbers() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.numbers;
    }

    async getRandomNaughty() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.Naughty;
    }
    
    async getRandomText100() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_100;
    }

    async getRandomText255() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_255;
    }

    async getRandomText256() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_256;
    }

    async getRandomText299() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_299;
    }

    async getRandomText300() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_300;
    }

    async getRandomText301() {
        const response = await fetch("https://my.api.mockaroo.com/data-pool.json?key=7d257dd0");
        const dataPool = await response.json();
        return dataPool.text_301;
    }
}


module.exports = new ApiDataPool();