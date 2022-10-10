function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}
 
function sortInWave(arr, n)
{
     
    // Sort the input array
    arr.sort((a, b) => a - b);
 
    // Swap adjacent elements
    for(let i = 0; i < n - 1; i += 2)
        swap(arr, i, i + 1);
}
 
// Driver code
let arr = [ 10, 90, 49, 2, 1, 5, 23 ];
let n = arr.length;
 
sortInWave(arr, n);
 
for(let i = 0; i < n; i++)
    document.write(arr[i] + " ");