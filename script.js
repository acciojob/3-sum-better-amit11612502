function threeSum(arr, target) {
// write your code here
  let min= Number.MAX_VALUE;
	let ans=0
	let n=arr.length;
	for(let i=0;i<n;i++){
		for(let j=i+1;j<n;j++){
			for(let k=j+1;k<n;k++){
				let min=arr[i]+arr[j]+arr[k];
				if(Math.abs(sum-target)<=min){
					min= Math.abs(sum-target);
					ans=sum;
				}
			}
		}
	}
	return ans;
}

module.exports = threeSum;
