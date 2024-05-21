// js/script.js

function searchActivities() {
  const query = document.getElementById('search-input').value;
  const results = document.getElementById('results');
  
  // Simple example of search functionality
  if (query.toLowerCase().includes('park')) {
      results.innerHTML = `<p>Results for parks matching "${query}":<br> - Yellowstone National Park<br> - Yosemite National Park<br> - Grand Canyon National Park</p>`;
  } else if (query.toLowerCase().includes('mountain')) {
      results.innerHTML = `<p>Results for mountains matching "${query}":<br> - Mount Everest<br> - Mount Kilimanjaro<br> - Rocky Mountains</p>`;
  } else {
      results.innerHTML = `<p>No results found for "${query}". Try searching for "park" or "mountain".</p>`;
  }
}
