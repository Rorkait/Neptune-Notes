// Buttons
let newText = document.querySelector("#newText");
let saveText = document.querySelector("#saveText")


let deleteText = document.querySelector(".deleteText");

let pageArea = document.querySelector(".text-file");

let textInput = document.querySelector("#textWriter");

let edit = false;
let editText;

function createNote(Text){
    let note = document.createElement("div");
    let noteText = document.createElement("div");
    let text = document.createElement("p");

    let deleteButton = document.createElement("div");
    let deleteText = document.createElement("div");

    let trashImg =  document.createElement("i");
    
    let taskComplete = document.createElement("i")

    let editNote = document.createElement("i");

    // set icon edit class
     // <i class="fa-regular fa-pen-to-square"></i>
    editNote.classList.add("fa-regular");
    editNote.classList.add("fa-pen-to-square");
    editNote.classList.add("fa-2x");

    // set icon complete class
    const taskClass = taskComplete.classList;
    taskClass.add("fa-solid");
    taskClass.add("fa-check");
    taskClass.add("fa-2x");
    // set icon trash class
    const iconClass = trashImg.classList;
    iconClass.add("fa-solid");
    iconClass.add("fa-trash-can");
    iconClass.add("fa-2x");
    // set parent element
    pageArea.appendChild(note);
    // two DIVs inside note container
    note.appendChild(noteText);
    note.appendChild(deleteButton);
    
    // set P child to noteText
    noteText.appendChild(text);

    // set deleteText child to delete-button
    deleteButton.appendChild(deleteText);

    // Add Classes to the element

    // First Class note
    const addNoteClass = note.classList;
    addNoteClass.add("note");
    
    // Second Class noteText 
    const addNoteTextClass = noteText.classList;
    addNoteTextClass.add("noteText");
    
    // Third Class delete-button
    const addDeleteButtonClass = deleteButton.classList;
    addDeleteButtonClass.add("delete-button");

    // Fourth Class deleteText
    const addDeleteTextClass = deleteText.classList;
    addDeleteTextClass.add("deleteText")
    
    // add buttons to deleteText
    deleteText.appendChild(editNote);
    deleteText.appendChild(taskComplete);
    deleteText.appendChild(trashImg);

    // add class to buttons
    editNote.classList.add("edit");
    const completeClass = taskComplete.classList;
    completeClass.add("complete");
    const deleteClass = trashImg.classList;
    deleteClass.add("delete");

    text.innerText = textInput.value;
}


let pText1;



saveText.onclick = () =>{
    if(textInput.value != "" && edit == false){
    // create Note
    createNote();
    
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
    deleteEl.remove(e.target);
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

            // editElement();


            if(!pageArea.classList.contains("hide")){
            pageArea.classList.add("hide");
            }else{
            pageArea.classList.toggle("hide");
            }
            }
});








