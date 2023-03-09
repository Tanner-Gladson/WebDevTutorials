function handleOnClickEvent() {
    let output = document.querySelector("div.output");
    output.style.display = "block";
    
    let hours = document.getElementById("hours_list");
    hours.innerHTML = "";
    
    let now = new Date();
    now.setMinutes(now.getMinutes() + 14);
    
    for (let i = 1; i <= 6; i++) {
        now.setMinutes(now.getMinutes() + 90);
        hours.innerHTML += now.toLocaleTimeString() + "<br />"
    }
}