document.addEventListener('DOMContentLoaded', () => {
  const dataDisplay = document.getElementById('data-display');

  // Function to fetch and display JSON data
  const displayData = async () => {
    try {
      const response = await fetch('/api/data'); // Change '/api/data' to your actual API route
      if (response.ok) {
        const data = await response.json();

        // Display the JSON data in the 'data-display' div
        dataDisplay.textContent = JSON.stringify(data, null, 2);
      } else {
        console.error('Failed to fetch JSON data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the function to fetch and display JSON data
  displayData();
});
