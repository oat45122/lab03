const table = [];
const player = [];
const com = [];

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',onClick));
function onClick(clickedCellEvent){
    console.log("clicked")
    const clickCell = clickedCellEvent.target;
    var id = clickCell.getAttribute('id');
    if(table.includes(id)){
        return false;
    }
    else{
        clickCell.src = "https://img.icons8.com/ios-filled/2x/x.png";
        table.push(id);
        player.push(id);
    }
    bot();
    function bot(){
        while(true)
        {
            var item = Math.floor(Math.random()*9 + 1);
            const random = document.getElementById(item);
            var id = random.getAttribute('id')
            if(table.length===9){
                break;
            }
            else if(table.includes(id)){
                continue;
            }
            else{
                random.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/O-Jolle_insigna.png/100px-O-Jolle_insigna.png"
                com.push(id);
                table.push(id);
                break;
            }    
        }
    }
}
