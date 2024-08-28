class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let selectedItem = bucket.find(item => item[0] === key);
            if (selectedItem) {
                selectedItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {
            let selectedItem = bucket.find(item => item[0] === key);
            if (selectedItem) {
                return selectedItem[1];
            }
        }
        return undefined; // Fixed typo from 'undefinded'
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {
            let selectedItem = bucket.find(item => item[0] === key);
            if (selectedItem) {
                bucket.splice(bucket.indexOf(selectedItem), 1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example usage
const hashTables = new HashTable(22);
hashTables.set('name', 'akshay');
hashTables.display();
