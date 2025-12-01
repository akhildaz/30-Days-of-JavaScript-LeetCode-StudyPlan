// let myMap = new Map([
//     ['name', 'Akhil'],
//     [true, 'BoolKey'],
//     [1, 'NumKey']
// ]);

// myMap.set('age', 20);

// console.log(myMap);

// console.log(myMap.get('name'));

// console.log(myMap.has('age'));

// console.log(myMap.delete('age'));

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const exists = this.cache.has(key);

        // If the key already exists, clear its previous timeout
        if (exists) {
            const oldTimeoutId = this.cache.get(key).timeoutId;
            clearTimeout(oldTimeoutId);
        }

        // Set up new timeout to remove the key after 'duration' ms
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        // Store value and timeoutId together
        this.cache.set(key, { value, timeoutId });

        return exists; // true if key was already present
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();
cache.set(1, 42, 100);     // returns false
cache.set(1, 99, 1000);    // returns true (overwrites)

setTimeout(() => {
    console.log(cache.get(1)); // In buggy version: might log -1 too early!
}, 150);
// In original buggy code: after 100ms, the FIRST timeout runs and deletes the key!
// Even though you set it to expire in 1000ms the second time!
