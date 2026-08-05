export interface VectorDocument {
    id: string;
    text: string;
    embedding: number[];
    metadata?: Record<string, any>;
}
