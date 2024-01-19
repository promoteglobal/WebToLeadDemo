function beforesubmit(){
  let outputdate = document.querySelector('.outputdate');
  let inputdate = document.querySelector('.inputdate');
  console.log('inputdate.value', inputdate.value); //sting --> date (en_US)
  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
  console.log("formattedDate");
  outputdate.value = formattedDate;
}


