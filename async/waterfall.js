var fs=require('fs')
   ,http=require('http')
    ,async=require('async');

	async.waterfall([
	  fs.readfile(process.argv[2],function(err,data){
	    if(err) return console.log(err);
	    console.log(data)
	  })
	
	  function(data,result){
	    var body='';
	    http.get(data.toString().trimRight(),function(res){
		res.on('data',function(chunk){
		body+=chunk.toString();
	     });
	   
	    res.on('end',function(){
	    console.log(null,body);
	   });
	 }).on('error',function(e){
	   console.log(e);
	 });
	},
	function done(err,result){
	if(err) return console.log(err);
	console.log(result);
	};

      