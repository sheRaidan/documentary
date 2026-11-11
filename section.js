var slider = document.getElementById("slider");

slider.addEventListener('input', function(event) {
    var value = event.target.value;
    // console.log(value);

    for (var i = 1; i <= 6; i++){
        var section = document.getElementById(i);
        if (i == value){
            section.classList.remove("hide");
        }else{
            section.classList.add("hide");
        }
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft" && slider.value > 1){
        slider.value--;
    }else if (event.key == "ArrowRight" && slider.value < 6){
        slider.value++;
    }

    for (var i = 1; i <= 6; i++){
        var section = document.getElementById(i);
        if (i == slider.value){
            section.classList.remove("hide");
        }else{
            section.classList.add("hide");
        }
    }
});