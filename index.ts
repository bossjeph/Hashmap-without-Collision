class ListNode<K, V> {
    key: K;
    value: V;
    
    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

class HashMap<K, V> {
    private buckets: Array<ListNode<K, V>>;
    private size: number;
    
    constructor() {
        this.buckets = new Array(10);
        this.size = 10;
    }
      

    private hash(key: K): number {
        let hash = 0;
        const str = String(key);
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % this.size;
    }
    
    put(key: K, value: V): void {
        const index = this.hash(key);
        this.buckets[index] = new ListNode(key, value);
    }
    
    get(key: K): V | undefined {
        const index = this.hash(key);
        const node = this.buckets[index];
        
        if (node) {
            return node.value;
        }
        
        return undefined;
    }
}


const map_1 = new HashMap<string, string>();
map_1.put("name", "Moyo");
map_1.put("age", "21");

console.log(map_1.get("name"));
console.log(map_1.get("age")); 

console.log()

const map_2 = new HashMap<string, string>();
map_2.put("ab", "first");
map_2.put("ba", "second");

console.log(map_2.get("ab")); 
console.log(map_2.get("ba"));

console.log()

const map_3 = new HashMap<string, string>();
map_3.put("eat", "present perfect tense");
map_3.put("ate", "past tense");

console.log(map_3.get("eat")); 
console.log(map_3.get("ate"));