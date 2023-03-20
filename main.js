const textarea = document.querySelector("textarea"),
fileNamInput= document.querySelector(".file-name input"),
selectMenu= document.querySelector(".save-as select"),
saveBtn= document.querySelector(".save-btn");

// change the text on the button of save to the Mim value chosen dynamicly.
selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File `;
    console.log(selectedOption)

});

// download the file in the MiM type chosen and download the file .
saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], { type: selectMenu.value });
    let fileUrl = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = fileNamInput.value;
    link.href = fileUrl;
    link.click();
});