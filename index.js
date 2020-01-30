//  A pre-sorted array : const

const array = [1,20,33,48,52,67,143,198]

// A copy of presorted array to edit.

// a variable to add

const item = 143;


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


