export class MemoryStore {

    private memory:any[] = [];


    save(data:any){

        this.memory.push({
            ...data,
            createdAt:new Date()
        });

    }



    getAll(){

        return this.memory;

    }


}