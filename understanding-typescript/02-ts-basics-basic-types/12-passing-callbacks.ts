function addAndHandle(n1:number, n2:number, callBack:(result:number) => void){
  const result = n1 + n2;
  callBack(result);
  console.log(callBack(result));
  // let value: number = callBack(result); // now it produces an error because callBack must return a number
  // console.log(value);
}

addAndHandle(10, 20, (result)=>{
  console.log(result);
  return result; // doesn't matter
})



// the callback here, is already specified therefore doing something else would cause errors, also, it's fine to return something because it's more of a specification rather than an enforcement.