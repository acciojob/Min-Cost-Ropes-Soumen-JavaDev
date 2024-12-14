function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>a-b)

	let total=0;
	while(arr.length>1){
		let first=arr.shift() ;
		let second=arr.shift()

		let cost=first+second;

		total +=cost;
		arr.push(cost);

		arr.sort((a,b)=>a-b)
	}

	return total;
  
}

module.exports=mincost;
