function threeSum(arr, target) {
// write your code here
  let min= Number.MAX_VALUE;
	let ans=0
	
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
			if (Math.abs(target - min) >Math.abs(target - (arr[i] + arr[j] + arr[k])))
				
min = (arr[i] + arr[j] + arr[k]);

				
					
					
				
			}
		}
	}
	return min;
}

module.exports = threeSum;
