
document.getElementById("showMoreBtn").addEventListener("click", function() {
  const moreContent = document.getElementById("moreContent");
  moreContent.style.display = (moreContent.style.display === "none" || moreContent.style.display === "") ? "block" : "none";
});
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});<script src="quotes.js"></script>
<script>
  $(document).ready(function() {
    $('#toggleBtn').click(function() {
      $('#content').slideToggle();
    });

    $('#fadeBtn').click(function() {
      $('#fadeImage').fadeToggle();
    });

    $('#loadQuoteBtn').click(function() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      $('#quoteContent').text(quotes[randomIndex]);
    });
  });
</script>