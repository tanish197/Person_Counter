let saveEl=document.getElementById("save-el")
let ansEl=document.getElementById("ans-el")
let countEl=document.getElementById("count-el")
console.log(countEl)

let count=0
let countStr
console.log(saveEl)
console.log(ansEl)

function increment(){
    
    count=count+1
    countEl.innerText= count
}

function decrement(){
    
    if(count==0){
    countEl.innerText= 0}
    else{
        count-=1 
    countEl.innerText= count
    }
}

function save(){
    let countStr = count + "+"
    saveEl.innerText+= countStr 
    
}

function reset(){
    count=0
    countEl.innerText= count
    
}

function reset2(){

    save=0
    saveEl.innerText= save
    location.reload()
    
}
