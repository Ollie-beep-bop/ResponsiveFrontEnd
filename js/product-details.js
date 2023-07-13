function handleButtonVisibility(event) {
    var seeMoreBtn = document.getElementById("seeMoreBtn");
    if (event.target.dataset.filter === "*") {
      seeMoreBtn.style.display = "none";
    } else {
      seeMoreBtn.style.display = "block";
    }
  }
  
  // Event listener for filter clicks
  var portfolioFilters = document.querySelectorAll("#portfolio-flters li");
  portfolioFilters.forEach(function (filter) {
    filter.addEventListener("click", handleButtonVisibility);
  });
  
  // Function to handle See More button click
  function handleSeeMoreClick() {
    // Add any custom logic here for handling the See More button click
    // Example: You can load more items, expand the view, or perform other actions
    console.log("See More button clicked");
  }
  
  // Event listener for See More button click
  var seeMoreBtn = document.getElementById("seeMoreBtn");
  seeMoreBtn.addEventListener("click", handleSeeMoreClick);
  
  