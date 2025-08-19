const contactform=document.getElementById(`contactForm`);
const usernameInput=document.getElementById(`username`);
const usernameError=document.getElementById(`usernameError`);

contactform.addEventListener(`submit`,function(event)){
    const username = usernameInput.ariaValueMax.trim();
    if(username !==`MNPCOLLEGE`){
        Event.preventDefault();//prevent form submission
        usernameError.textContent = `WRONG USERNAME`;
    } else{
        usernameError.textContent = ``;//clear error message

    });
}