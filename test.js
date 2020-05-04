var rbtn=document.querySelector('#b')
var cells=document.querySelectorAll('td')
var checkBtn=document.querySelector('#c')
function onClick(){
  for (cell of cells){
    cell.textContent=''
  }
  document.getElementById("result").textContent=''
}
rbtn.addEventListener('click',onClick)

function tableDataOnClick(){
  if (this.textContent=='X'){
    this.textContent='O'
  }
  else if (this.textContent=='O') {
    this.textContent=''
  }
  else{
    this.textContent='X'
  }
}

for(cell of cells){
  cell.addEventListener('click',tableDataOnClick)
}
checkBtn.addEventListener('click',result)
function result(){
  if(document.getElementById("1").textContent===document.getElementById("2").textContent && document.getElementById("2").textContent===document.getElementById("3").textContent){
    document.getElementById("result").textContent=document.getElementById("1").textContent
  }
  else if (document.getElementById("4").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("6").textContent) {
    document.getElementById("result").textContent=document.getElementById("4").textContent
  }
  else if (document.getElementById("7").textContent===document.getElementById("8").textContent && document.getElementById("8").textContent===document.getElementById("9").textContent) {
    document.getElementById("result").textContent=document.getElementById("7").textContent
  }
  else if (document.getElementById("1").textContent===document.getElementById("4").textContent && document.getElementById("4").textContent===document.getElementById("7").textContent) {
    document.getElementById("result").textContent=document.getElementById("1").textContent
  }
  else if (document.getElementById("2").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("8").textContent) {
    document.getElementById("result").textContent=document.getElementById("2").textContent
  }
  else if (document.getElementById("3").textContent===document.getElementById("6").textContent && document.getElementById("6").textContent===document.getElementById("9").textContent) {
    document.getElementById("result").textContent=document.getElementById("3").textContent
  }
  else if (document.getElementById("1").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("9").textContent) {
    document.getElementById("result").textContent=document.getElementById("1").textContent
  }
  else if (document.getElementById("3").textContent===document.getElementById("5").textContent && document.getElementById("5").textContent===document.getElementById("7").textContent) {
    document.getElementById("result").textContent=document.getElementById("3").textContent
  }
  else {
    document.getElementById("result").textContent='Match is Draw'
  }

}
