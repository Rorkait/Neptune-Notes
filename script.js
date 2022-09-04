// Buttons
let newText = document.querySelector("#newText");
let saveText = document.querySelector("#saveText")


let deleteText = document.querySelector(".deleteText");

let pageArea = document.querySelector(".text-file");

let textInput = document.querySelector("#textWriter");



saveText.onclick = () =>{
    if(textInput.value != ""){
    // create elements
    let note = document.createElement("div");
    let noteText = document.createElement("div");
    let text = document.createElement("p");

    let deleteButton = document.createElement("div");
    let deleteText = document.createElement("div");

    let trashImg =  document.createElement("img");
    trashImg.src = "./images/trash.png";

    let deleteP = document.createElement("p");


    
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
    
    // add img and P to deleteText
    deleteText.appendChild(trashImg)
    deleteText.appendChild(deleteP)
    deleteP.innerText = "Delete"
    
    // hide textInput
    if(!textInput.classList.contains("hide")){
        textInput.classList.toggle("hide");
    }
    
    text.innerText = textInput.value;
    }
    textInput.value = "";
}

newText.onclick = () => {
    // show textInput
    textInput.classList.toggle("hide");
    textInput.value = "";
}

document.addEventListener("click", (e) =>{
    // mouse capture movement
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");


    if(parentEl.classList.contains("deleteText")){
    const deleteEl = parentEl.closest(".note");
    deleteEl.remove();
    }
});








