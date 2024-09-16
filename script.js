const board = document.getElementById('board');
const changeScale=document.getElementById('scale');
const reset = document.getElementById('reset');
let row = changeScale.value;
    function Scale(){
        for(let i = 0; i<row*row;i++){
         let rowblocks = document.createElement('div');
         rowblocks.classList.add('pixel');
         board.appendChild(rowblocks);
         rowblocks.style.height = `calc(50vh/${row})`;
         rowblocks.style.width = `calc(50vh/${row})`;
         rowblocks.addEventListener('mouseover',()=>{rowblocks.onmouseover= rowblocks.style.backgroundColor='black';});
         reset.addEventListener('click',()=>{rowblocks.style.backgroundColor='white';})
         console.log(row);
     }}
Scale();
changeScale.addEventListener('change',()=>{
    document.querySelectorAll(".pixel").forEach(div => div.remove())
    row = changeScale.value;
Scale();  
});



