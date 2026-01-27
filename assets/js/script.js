// For normal Locations

document.addEventListener("click", function (e) {

  const outlet = e.target.closest(".location-outlet-div");
  if (!outlet) return;

  const mapUrl = outlet.dataset.map;

  // LEFT DIV → open map
  if (e.target.closest(".left-div")) {
    window.open(mapUrl, "_blank");
  }

  // COPY ICON
  if (e.target.closest(".copy-icon")) {
    e.preventDefault();
    navigator.clipboard.writeText(mapUrl);
    alert("Location copied!");
  }

  // SHARE ICON
  if (e.target.closest(".share-icon")) {
    e.preventDefault();

    if (navigator.share) {
      navigator.share({
        title: "Outlet Location",
        url: mapUrl
      });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(mapUrl)}`,
        "_blank"
      );
    }
  }

});


// For Accordion Locations
document.addEventListener("click", function (e) {

  const accordion = e.target.closest(".location-accordion");
  if (!accordion) return;

  const mapUrl = accordion.dataset.map;

  // 🗺 Map click (branch name / icon)
  if (e.target.closest(".map-link")) {
    e.stopPropagation();   // ⛔ stop accordion toggle
    window.open(mapUrl, "_blank");
    return;
  }

  // 📤 Share click
  if (e.target.closest(".share-icon")) {
    e.stopPropagation();   // ⛔ stop accordion toggle

    if (navigator.share) {
      navigator.share({
        title: "Branch Location",
        url: mapUrl
      });
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(mapUrl)}`,
        "_blank"
      );
    }
    return;
  }

  // 🔽 Default: toggle accordion
  toggleAccordion(accordion);

});

function toggleAccordion(accordion) {
  accordion.classList.toggle("open");
}
