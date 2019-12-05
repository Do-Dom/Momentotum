const HIDE = "css-hide";

const greetingContainer = document.querySelector(".js-greeting");
const greetingComment = greetingContainer.querySelector(".js-comment");
const greetingForm = greetingContainer.querySelector(".js-form");
const greetingInput = greetingForm.querySelector(".js-input");
const greetingResetBtn = greetingContainer.querySelector(".js-btn");

const LS_NAME = "NAME";

const superEventHandler = {
    onSubmit : (submitEvent)=>{
        submitEvent.preventDefault();

        localStorage.setItem(LS_NAME, greetingInput.value);
        showName(greetingInput.value);
        greetingInput.value = "";
    },

    onResetBtnClick : ()=>{
        console.log("Cick Reset Btn");
        localStorage.removeItem(LS_NAME);
        showForm();
    }
};

function showName(name)
{
    greetingForm.classList.add(HIDE);
    greetingComment.textContent = `Helllo ${name}`;
    greetingResetBtn.classList.remove(HIDE);
}

function showForm()
{
    greetingForm.classList.remove(HIDE);
    greetingComment.textContent = "Hi";
    greetingResetBtn.classList.add(HIDE);
}

function greeting()
{
    greetingForm.addEventListener("submit", superEventHandler.onSubmit);
    greetingResetBtn.addEventListener("click", superEventHandler.onResetBtnClick);
    greetingInput.placeholder = "What is your name?";

    if(localStorage.getItem(LS_NAME) != null) {
        showName(localStorage.getItem(LS_NAME));
    }
    else{
        showForm();
    }
}

function init()
{
    greetingComment.classList.add(FAINT);
    greeting();
}

init();