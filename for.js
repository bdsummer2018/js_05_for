var num = 123222;

var first=0;
var second=0;

for(var i=num, j=0;i>0;i=parseInt(i/10),j++){
    if(j<3) first+=i%10;
    else second+=i%10;
}

console.log( first===second ? "yes" : "no");