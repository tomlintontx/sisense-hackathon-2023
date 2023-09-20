export class TrieNode {
    children: TrieNode[];
    phrase: string | null;

    constructor() {
        // Ascii 32 - 90 for Punchuation and Capital Letters
        this.children = Array(59).fill(null);
        this.phrase = null;
    }

    static getIndex(char: string) {
        return char.charCodeAt(0) - ' '.charCodeAt(0);
    }

    maxDepth() {
        let max = 0;
        for (let child of this.children) {
            if (child) {
                max = Math.max(max, child.maxDepth());
            }
        }
        return max + 1;
    }
}

export type TrieMatch = [start: number, end: number, phrase: string];

export default class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(phrase: string) {
        let current = this.root;

        for (let ch of phrase) {
            const idx = TrieNode.getIndex(ch.toUpperCase());
            if (!current.children[idx]) {
                current.children[idx] = new TrieNode();
            }
            current = current.children[idx];
        }

        current.phrase = phrase;
    }

    insertMany(phrases: string[]) {
        for (let phrase of phrases) {
            this.insert(phrase);
        }
    }

    searchExact(phrase: string) {
        let current = this.root;

        for (let ch of phrase) {
            let chu = ch.toUpperCase();
            const idx = TrieNode.getIndex(chu);
            if (!current.children[idx]) {
                return false;
            }
            current = current.children[idx];
        }

        return current.phrase
    }

    searchInText(pagetext: string): TrieMatch[] {

        const text = pagetext.normalize('NFKC')

        if (text.length !== pagetext.length) {
            console.log("Normalization changed the length of the text")
            return []
        }

        let matches = []

        // Iterate over every word in the text, and run searchExact on it. Then store the start index, end index, and phrase in an array.
        // Return the array of matches.

        // looper: {
        for (let i = 0; i < text.length; i++) {
            let current = this.root;
            let j = i;
            while (j < text.length && current.children[TrieNode.getIndex(text[j].toUpperCase())]) {
                current = current.children[TrieNode.getIndex(text[j].toUpperCase())];
                j++;
                if (current.phrase) {
                    matches.push([i, j, current.phrase] as [number, number, string]);
                    // try doing just a single match
                    // break looper;
                }
            }
        }
        // }

        return matches;
    }

    maxDepth() {
        return this.root.maxDepth();
    }
}
