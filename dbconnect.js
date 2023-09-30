const refExp = require("express")
const refMysql = require("mysql2")
const bodyParser = require('body-parser');


const app = refExp()
const db=refMysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "port":3306,
    "database":"testfk"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.use(bodyParser.json());


app.listen(1234,()=>{
    console.log("My app is running!!")
})

app.get('/fetch',async(req,res)=>{
    const sql="select * from student_details"
    db.query(sql,(err,records)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        if(records.length==0){
            res.json(201).json({"message":"no records found"})
            return
        }
        res.status(200).json({records})
    })
})

app.post('/insert',async(req,res)=>{
    const sql="insert into student_details values (?,?,?,?,?)"
    db.query(sql,["Rollno","Name","FG_id","Gender_id","Dept_id"],(err,result)=>{
        if (err) {
            res.status(500).json({ "error": err.message })
        }
        else{
            res.status(200).json({ "message": result.affectedRows });
        }
    })
})