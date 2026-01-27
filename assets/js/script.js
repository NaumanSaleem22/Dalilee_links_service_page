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