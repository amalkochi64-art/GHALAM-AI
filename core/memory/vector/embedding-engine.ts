export class EmbeddingEngine {

    embed(text: string): number[] {

        const result: number[] = [];

        for (const c of text) {
            result.push((c.charCodeAt(0) % 97) / 100);
        }

        while (result.length < 128)
            result.push(0);

        return result.slice(0,128);

    }

}
