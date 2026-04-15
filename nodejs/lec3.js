const fs=require('fs')
const http=require('http')

const server=http. createServer((req, res)=>{
    console.log(req)
})
// server.listen(8000) 
const port=8000
server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})