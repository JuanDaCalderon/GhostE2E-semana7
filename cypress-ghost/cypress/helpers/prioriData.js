import prioriDataPool from '../../data-pool/a-priori-data.json';

class PrioriDataPool {
    dataPool = prioriDataPool;

    getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    getRandomFirstName() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].first_name;
    }

    getRandomLastName() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].last_name;
    }

    getRandomEmail() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].email;
    }

    getRandomPassword() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].password;
    }

    getRandomShortSentence() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].short_sentence;
    }

    getRandomLongSentence() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].long_sentence;
    }

    getRandomNumbers() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].numbers;
    }

    getRandomNaughty() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].Naughty;
    }

    getRandomtagName20() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagName20;
    }

    getRandomtagName190() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagName190;
    }

    getRandomtagName192() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagName192;
    }

    getRandomtagDescription80() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagDescription80;
    }

    getRandomtagDescription499() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagDescription499;
    }

    getRandomtagDescription501() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].tagDescription501;
    }

    getRandomnumberAndSpecialChar() {
        const index = this.getRandomIndex(100);
        return this.dataPool[index].numberAndSpecialChar;
    }
}


module.exports = new PrioriDataPool();