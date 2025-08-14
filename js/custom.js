// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();
// Get all accordion buttons
const acc = document.querySelectorAll(".accordion-button");

// Loop through each accordion button and add a click event listener
acc.forEach(button => {
  button.addEventListener("click", function() {
    // Toggle the 'active' class on the clicked button
    this.classList.toggle("active");

    // Get the corresponding accordion content
    const content = this.nextElementSibling;

    // Toggle the visibility of the accordion content
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
