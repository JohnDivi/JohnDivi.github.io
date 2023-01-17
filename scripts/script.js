
function setupNavListeners() {
    let navButtons = [...document.querySelectorAll(".nav-button")];

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
        
            // Update button classes when clicked
            let changeButtonsClass = navButtons;
            changeButtonsClass.forEach(changeButton => {
                if (button.isSameNode(changeButton)) {
                    changeButton.className = "nav-button nav-selected";
                } else {
                    changeButton.className = "nav-button nav-deselected";
                }
            });
            updateShownPage(navButtons);
        });
    });

    return;
}

function updateShownPage(navButtons) {
    let projectContainer = document.querySelector("#projects-container");
    let miniProjectContainer = document.querySelector("#mini-projects-container");

    navButtons.forEach(button => {
        if (button.classList.contains("nav-selected") &&
            button.id === "projects-button") {
            projectContainer.hidden = false;
            miniProjectContainer.hidden = true;

        } else if (button.classList.contains("nav-selected") &&
            button.id === "mini-projects-button"){
            projectContainer.hidden = true;
            miniProjectContainer.hidden = false;
        }
    });
}

function initialize() {
    setupNavListeners();
}

initialize();
