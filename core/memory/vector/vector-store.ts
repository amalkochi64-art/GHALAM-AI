import { VectorDocument } from "./vector-document";

export class VectorStore {

    private documents: VectorDocument[] = [];

    add(document: VectorDocument) {
        this.documents.push(document);
        return document;
    }

    all() {
        return this.documents;
    }

    find(id: string) {
        return this.documents.find(d => d.id === id);
    }

    similarity(a: number[], b: number[]) {

        let dot = 0;
        let normA = 0;
        let normB = 0;

        for (let i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }

        return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    search(vector: number[], limit = 5) {

        return this.documents
            .map(doc => ({
                document: doc,
                score: this.similarity(vector, doc.embedding)
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);

    }

}
