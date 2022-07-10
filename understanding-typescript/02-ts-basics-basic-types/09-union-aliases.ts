type Combinable = number | string;
type CombinableDescriptor = "showResult" | "showNoResult"


function combineNew(input1: Combinable, input2: Combinable, resultStatus : CombinableDescriptor){
  if(resultStatus === "showResult"){
    if(typeof input1 === "number" && typeof input2 === "number"){
      return input1 + input2;
    }
    return input1.toString() + input2.toString();
  } else if(resultStatus === "showNoResult"){
    return "Show No Result was passed";
  }
}

console.log(combineNew(1,1, "showResult"));