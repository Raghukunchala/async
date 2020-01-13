var http=require('http')
var async=require('async')

	async.series({
   	   requestOne: function(done){
	      fetchUrl(process.argv[2],done)
	},
	requestTwo: fuction(done){
	   fetchUrl(process.argv[2],done)
	}
}, function(err,results){
 	if(err) console.log(err);
	console.log(results);
});
	function fetchUrl(url,done){
	   var body='';
	   http.get(url,function(res){
		res.on('data',function(chunk){
		  body+=chunk.toString();
		});
		res.on('end', function(){
		   done(null,body);
		});
	}).on('error',function(err){
		done(err)
	     });
	}