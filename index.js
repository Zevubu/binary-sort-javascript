//  A pre-sorted array : const

const array = [1,2,3,4,5,6]

// A copy of presorted array to edit.

// a variable to add

const item = 4;


// for function to array.length

const numSearch = (arr, x) =>{
    // array variables
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start + end) / 2);

    // find midle point and compare.

   while(start < end && x !== arr[mid]){

       if( x < arr[mid]){
           end = mid -1;
       }
       else if (x > arr[mid]){
           start = mid +1;
       }
       mid = Math.floor((start+end) /2);
   }

   return (arr[mid] !== x) ? -1 : mid;

        

}


console.log(numSearch(array, item))


