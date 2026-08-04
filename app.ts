import { AIKernel } from "./core/kernel/ai-kernel";


const kernel = new AIKernel();



const result = kernel.run({

    userId:"001",

    message:
    "قیمت صندلی مدیریتی چنده؟"

});



console.log(result);