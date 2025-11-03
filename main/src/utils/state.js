class State {

    static returnKeys = ["statuOnline"]
    static statuOnline = {}

    static setStatusOnline(id, online) {
        this.statuOnline[id] = online
    }

    static getStatusOnline(id) {
        return this.statuOnline[id]
    }

    static getAllStates(){
        const states = {}
        for (let key of this.returnKeys) {
            states[key] = this[key]
        }
        return states
    }
}

module.exports = State;