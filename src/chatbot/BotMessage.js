class BotMessage {
    constructor(message, alternatives) {
        this.message = message;
        this.alternatives = alternatives;
    }

    /**
     * Only for debugging purposes.
     */
    print() {
        console.log(this.message);

        this.alternatives.forEach(alternative => {
            console.log(alternative)
        });
    }

    toJsObject() {
        return {
            message: this.message,
            alternatives: this.alternatives,
            createdAt: Date.now()
        };
    }
}

export default BotMessage;