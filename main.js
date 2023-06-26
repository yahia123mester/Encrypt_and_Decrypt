
let textarea = document.getElementById("text");
let result = document.getElementById("Result");
let select = document.getElementById("select");
textarea.addEventListener("input", ()=>{
     p();
});
select.addEventListener("change", ()=>{
    p();
});
function  p(){
    if(select.value === "decode"){
result.value = window.atob(textarea.value);
    }else{
        result.value = window.btoa(textarea.value);
    }
}