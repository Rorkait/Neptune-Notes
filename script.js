// Buttons
let newText = document.querySelector("#newText");
let saveText = document.querySelector("#saveText")


let pageArea = document.querySelector(".text-file");

let textInput = document.querySelector("#textWriter");

let edit = false;
let editText;
let notesArray = [];


class Note{
    constructor(text){
    this.note= document.createElement("div");   
    this.noteText = document.createElement("div");
    this.text = document.createElement("p");

    this.deleteButton = document.createElement("div");
    this.deleteText = document.createElement("div");

    this.trashIcon =  document.createElement("i");
    
    this.taskComplete = document.createElement("i")

    this.editNote = document.createElement("i");

    // set icon edit class
    this.editNote.classList.add("fa-regular");
    this.editNote.classList.add("fa-pen-to-square");
    this.editNote.classList.add("fa-2x");

    // set icon complete class
    this.taskComplete.classList.add("fa-solid");
    this.taskComplete.classList.add("fa-check");
    this.taskComplete.classList.add("fa-2x");
    
    // set icon trash class
    this.trashIcon.classList.add("fa-solid");
    this.trashIcon.classList.add("fa-trash-can");
    this.trashIcon.classList.add("fa-2x");

    // set Note in the page
    pageArea.appendChild(this.note);

    // text and buttons inside note container
    this.note.appendChild(this.noteText);
    this.note.appendChild(this.deleteButton);
    
    // set P child to noteText
    this.noteText.appendChild(this.text);

    // set buttons child to buttons container
    this.deleteButton.appendChild(this.deleteText);

    // Add Classes to the element

    // First Class note
    this.note.classList.add("note");
    
    // Second Class noteText 
    this.noteText.classList.add("noteText");
    
    // Third Class buttons
    this.deleteButton.classList.add("buttons");

    // Fourth Class deleteText
    this.deleteText.classList.add("deleteText")
    
    // add buttons to deleteText
    this.deleteText.appendChild(this.editNote);
    this.deleteText.appendChild(this.taskComplete);
    this.deleteText.appendChild(this.trashIcon);

    // add class to buttons
    this.editNote.classList.add("edit");
    this.taskComplete.classList.add("complete");
    this.trashIcon.classList.add("delete");
    this.text.innerText = text;
   }
}


let pText1; 

window.onload = () =>{
    if(localStorage.length >0){
    restoreNotes();
    notesArray.forEach(element => {
        createNotes(element);
    });
}

    

}

function createNotes(text){
    
    new Note(text);
    
}

function saveLocalStorage(){
    localStorage.setItem("notes",JSON.stringify(notesArray));
}

function restoreNotes(){
    notesArray= JSON.parse(localStorage.getItem("notes"));
}




saveText.onclick = () =>{
    if(textInput.value != "" && edit == false){
    
    // add new note to array
    notesArray.push(textInput.value);

    createNotes(textInput.value);

    // save in local storage

    saveLocalStorage();
    
    
    // hide notes when writing
    if(pageArea.classList.contains("hide")){
        pageArea.classList.toggle("hide");
    }

    // hide textInput
    if(!textInput.classList.contains("hide")){
        textInput.classList.toggle("hide");
    }
    }

    // Edit Text
    if(edit == true){
        pText1.innerText = textInput.value;
        edit = false;
        // hide notes when writing
    if(pageArea.classList.contains("hide")){
        pageArea.classList.toggle("hide");
    }

    // hide textInput
    if(!textInput.classList.contains("hide")){
        textInput.classList.toggle("hide");
    }
        
    }
    
    textInput.value = "";

}



newText.onclick = () => {
    // show textInput
    textInput.classList.toggle("hide");
    textInput.value = "";

    if(!pageArea.classList.contains("hide")){
        pageArea.classList.add("hide");
    }else{
        pageArea.classList.toggle("hide");
    }
}

document.addEventListener("click", (e) =>{
    // mouse capture movement
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    // Delete button
    
    if(targetEl.classList.contains("delete")){
    const deleteEl = parentEl.closest(".note");
    let parentText = deleteEl.children[0];
    let parentP = parentText.children[0];
    
    
    for(let i =0; i <notesArray.length;i++){

        if(parentP.innerText == notesArray[i]){
            notesArray.splice(i,1);
        }
    }

    // notesArray.forEach(element => {

    //     // checks if the element matches 
    //     if(parentP.innerText == element){
    //         // get the index of the deleted element
    //         let i = notesArray.indexOf(element)
    //         // remove the element from array
    //         notesArray.splice(i);
 
    //     }

        
    // });
    // delete element from screen
    deleteEl.remove(e.target);


    // save changes in local storage

    saveLocalStorage();
    
    }
  
    // complete button
    if(targetEl.classList.contains("complete")){
        let parentDiv = targetEl.closest("div");
        let parentNote = targetEl.closest(".note");
        let noteText = parentNote.children[0];
        let p =noteText.children[0];
        if(p.classList.contains("taskComplete")){
        p.classList.toggle("taskComplete");
        }
        else{
            p.classList.add("taskComplete");
        }
        }
        if(targetEl.classList.contains("edit")){
            edit = true;
            if(!textInput.classList.contains("hide")){
                textInput.classList.toggle("hide");

            }
            let parentText = targetEl.closest(".note");
            let parentNoteText = parentText.children[0];
            let pText =  parentNoteText.children[0];
            textInput.value = pText.innerText;
            pText.innerText = textInput.value;
            pText1 = pText;
            
            textInput.classList.toggle("hide");        


            if(!pageArea.classList.contains("hide")){
            pageArea.classList.add("hide");
            }else{
            pageArea.classList.toggle("hide");
            }
        }
});