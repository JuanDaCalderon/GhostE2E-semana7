class ApiDataPool {

    apiUrl = "https://my.api.mockaroo.com/data-pool.json?key=7d257dd0";

    async getUrlResponse() {
        const response = await fetch(this.apiUrl);
        const dataResponse = await response.json();
        return dataResponse
    }

    async getRandomFirstName() {
        const dataPool = await this.getUrlResponse();
        return dataPool.first_name;
    }

    async getRandomLastName() {
        const dataPool = await this.getUrlResponse();
        return dataPool.last_name;
    }

    async getRandomEmail() {
        const dataPool = await this.getUrlResponse();
        return dataPool.email;
    }

    async getRandomPassword() {
        const dataPool = await this.getUrlResponse();
        return dataPool.password;
    }

    async getRandomShortSentence() {
        const dataPool = await this.getUrlResponse();
        return dataPool.short_sentence;
    }

    async getRandomLongSentence() {
        const dataPool = await this.getUrlResponse();
        return dataPool.long_sentence;
    }

    async getRandomNumbers() {
        const dataPool = await this.getUrlResponse();
        return dataPool.numbers;
    }

    async getRandomNaughty() {
        const dataPool = await this.getUrlResponse();
        return dataPool.Naughty;
    }

    async getRandomWord() {
        const dataPool = await this.getUrlResponse();
        return dataPool.word;
    }
}


module.exports = new ApiDataPool();