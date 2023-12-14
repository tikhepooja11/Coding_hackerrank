  //  sorting without inbuilt method -> bubble sort


const arr: number [] = [5,7,4,5,2,1] //[-10,5,6,-33,101,3,9]
const ascending: number[]=[]
const descending: number[]=[]

let flag = 0, temp:number = 0
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1 ;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
    }
}
console.log(arr)
