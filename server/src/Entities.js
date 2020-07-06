
class EcoUser {
    constructor(alias) {
        this.alias = alias;
    }
}

class EcoMessage {
    constructor(from, msg) {
        this.from = from;
        this.msg = msg;
    }
}

class EcoChat {
    constructor() {
        this.connectedUsers = 0;
    }
}

module.exports = {
    EcoUser : EcoUser,
    EcoMessage : EcoMessage,
    EcoChat : EcoChat
};