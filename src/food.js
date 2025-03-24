document.addEventListener("DOMContentLoaded", () => {
    const foodImage = document.getElementById("food-image");
    const fetchButton = document.getElementById("fetch-food");

    async function fetchFoodImage() {
        try {
            const response = await fetch("https://foodish-api.com/api/");
            const data = await response.json();
            foodImage.src = data.image;
        } catch (error) {
            console.error("Error fetching food image:", error);
        }
    }

    fetchButton.addEventListener("click", fetchFoodImage);
    fetchFoodImage();
});
