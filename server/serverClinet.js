let fs=require('fs');
let url=require('url');
let http=require('http');
let sliders=require('./db/sliders');
function getBook(cb){
  fs.readFile('./db/book.json','utf-8',function (err,data) {
      if(err||data.length===0){
        cb([]);
      }else{
        cb(JSON.parse(data))
      }
  })
}
function writeBook(data,cb) {
  fs.writeFile('./db/book.json',JSON.stringify(data),cb)
}
http.createServer(function (req,res) {
  let {query,pathname}=url.parse(req.url,true);
  if(pathname ==='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }else if(pathname=== '/api/hot'){
    getBook(function(data){
      res.end(JSON.stringify(data.reverse().slice(0,12)))
    });
  }else if(pathname==='/api/book'){
   let id = parseInt(query.id);
   switch (req.method){
     case 'GET':
       getBook(function(data){
         res.end(JSON.stringify(data.reverse()))
       });
       break;
     case 'PUT':
       let str="";
       req.on('data',function (chunk) {
         str+=chunk;
       });
       req.on('end',function () {
         let book=JSON.parse(str);
         getBook(function (books) {
           book.id=books.length?books[books.length-1].id+1:1;
           books.push(book);
           writeBook(books,function () {
             res.end(JSON.stringify(book));
           })
         });
       });
       break;
   }
  }
}).listen(3001);


