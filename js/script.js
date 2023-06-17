{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const themeName = document.querySelector(".themeName");
        const body = document.querySelector(".body");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "Białe" : "Szare"
    };
    
    const init = () => {
        const button = document.querySelector(".button__headerRemove");
        const header = document.querySelector(".header__title");
    
        button.addEventListener("click", () => {
        header.remove();
        });
        
        const dark_mode = document.querySelector(".button__darkMode");
        dark_mode.addEventListener("click", toggleBackground);
        
        welcome();
    }
    init ();
     
}