import { MemoryRecord } from "./memory-record";


export class MemoryStore {


private memories:MemoryRecord[]=[];



save(
record:MemoryRecord
){

this.memories.push(
record
);


return record;

}



search(
query:string
){

return this.memories.filter(
m=>m.content.includes(query)
);

}



getUserMemory(
userId:string
){

return this.memories.filter(
m=>m.userId===userId
);

}



list(){

return this.memories;

}



}
