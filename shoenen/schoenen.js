function myFunction(x) {
    if (Math.random() < 0.5) { // 50% chance
        if (x.matches) { // If media query matches
            window.location.href = "schoenen2.html";
        }
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
    myFunction(x);
});