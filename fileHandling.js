const file = require('fs')

//creating a file
// const newText=`I'm an aspiring Engineering student. I'm very much interested in MERN Stack Development`
// file.writeFile(`C:\\Users\\NOORUL ASHFAQ\\Desktop\\10 days workshop\\backend\\MyNewFile.doc`,newText,'utf8',(err,result)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("Content has written")
// })

//updating a file
const myNewContent="Session was very good"
file.appendFile(`C:\\Users\\NOORUL ASHFAQ\\Desktop\\10 days workshop\\backend\\MyNewFile.doc`,myNewContent,'utf8',(err,res)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("Content has appended")
})