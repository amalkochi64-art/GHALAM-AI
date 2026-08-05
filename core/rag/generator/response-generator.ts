export class ResponseGenerator {


    generate(
        query:string,
        context:any[]
    ){

        return {

            query,

            context,

            answer:
`
بر اساس اطلاعات موجود:

${context
.map(item => item.document.text)
.join("\n")}

`

        };

    }


}