import { SemanticSearch } from "./core/memory/semantic/semantic-search";

const memory = new SemanticSearch();

memory.index(
"1",
"Executive Office Chair Luxury Leather Black"
);

memory.index(
"2",
"Office Desk MDF Modern White"
);

memory.index(
"3",
"Metal Filing Cabinet"
);

console.log(
memory.search("luxury office chair")
);
