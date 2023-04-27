export const FilterData = (arr1,arr2) =>{
    let watchItem = []
for(let i=0; i< arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i].id == arr2[j]){
            watchItem.push(arr1[i])
        }
    }

}
return watchItem
}