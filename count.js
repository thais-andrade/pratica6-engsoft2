class Value {
    constructor(value) {
        this.value = value;
    }

    get() {
        return this.value;
    }

    add(sum) {
        this.value = this.value + sum;
    }

    reset() {
        this.value = 0;
    }
}

module.exports = Value;