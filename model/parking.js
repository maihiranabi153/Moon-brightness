'use strict';

class Parking {
    constructor(numberOfSlot, free) {
        free = free || 'free';
        this.slots = new Array(numberOfSlot).fill(free);
        this.free = free;
    }

    findFirstFree() {
        let idx = this.slots.findIndex(x => x === this.free);
        return idx;
    }

    findByName(name) {
        let idx = this.slots.findIndex(x => x === name);
        return idx;
    }

    park(name) {
        let idx = this.findFirstFree();
        if (idx > -1 && idx < this.slots.length) {
            this.slots[idx] = name;
            return true;
        }
        return false;
    }

    leave(name, hours) {
        let result = [false];
        let idx = this.findByName(name);
        if (idx > -1 && idx < this.slots.length) {
            this.slots[idx] = this.free;
            result = [true, name, (idx + 1), this.price(hours)];
        }
        return result;
    }

    statusIsFree() {
        let results = this.slots.filter(x => x === this.free);
        return results;
    }

    statusNotFree() {
        let results = this.slots.filter(x => x !== this.free);
        return results;
    }

    status() {
        return this.slots;
    }

    toString() {
        return this.status().join('\n');
    }

    price(hours) {
        let totalcost = 0;
        if (parseInt(hours) > 0) {
            totalcost = parseInt(hours) > 2 ? 10 + 10 * (parseInt(hours) - 2) : 10;
        }
        return totalcost;
    }

    print() {
        console.log(this.toString());
    }
}

module.exports = { Parking };
