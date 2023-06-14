
var percentage = document.querySelector(".percentage");
var borders = document.querySelector(".secondry");

document.addEventListener("scroll", function () {
    //   console.log("it scrolling");
    // widows scroll
    var scroll = window.scrollY;
    var height = document.body.offsetHeight;
    var innerHight = window.innerHeight;
    var pNum = Math.round((scroll / (height - innerHight)) * 100);
    console.log(pNum);
    percentage.innerHTML = pNum + "%";
    borders.style.width = pNum + "%";
});
