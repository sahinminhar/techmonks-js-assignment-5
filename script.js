document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetchBtn");
  const output = document.getElementById("output");
  const loading = document.getElementById("loading");

  // Function to fetch Bacon Ipsum data using async/await
  async function fetchBaconIpsum() {
    output.innerHTML = "";
    loading.classList.remove("hidden");

    try {
      const response = await fetch("https://baconipsum.com/api/?type=all");
      if (!response.ok) throw new Error("Failed to fetch Bacon Ipsum data");

      const data = await response.json();
      loading.classList.add("hidden");

      // Display paragraphs dynamically
      data.forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        output.appendChild(p);
      });
    } catch (error) {
      loading.classList.add("hidden");
      output.innerHTML = `<p class="error"> ${error.message}</p>`;
    }
  }

  // Event listener for button click
  fetchBtn.addEventListener("click", fetchBaconIpsum);
});
