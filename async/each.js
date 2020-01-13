var http=require('http'),
    async=require('async');

async.each(process.argv[2],function(item,done){
	http.get(items,function(res){
	   res.on('data',function(chunk){
	  });
	    res.on('end',function(){
		return done();
	   });
	});
	}).on('error',function(err){
	      done(err);
		});
	},
	function(err){
	   if(err)console.log(err);
	}