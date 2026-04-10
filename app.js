// BASE URL ──
const baseURL = "https://forkify-api.jonas.io/api/v2/recipes";

// GET ALL RECIPES (search query)
const getAllRecipes = async (query = "pizza") => {
    const recipesGrid = document.getElementById("recipes-grid");
    recipesGrid.innerHTML = `<div class="msg"><i class="fas fa-spinner fa-spin"></i> Loading...</div>`;
    document.getElementById("count-label").textContent = "";

    try {
        const response = await fetch(`${baseURL}?search=${query}`);
        const data = await response.json();

        const recipesHTML = data?.data?.recipes.map((recipe) => {
            return `
          <div class="recipe-card" onclick="getRecipeById('${recipe?.id}')">
            <img src="${recipe?.image_url}" alt="${recipe?.title}"
                 onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'" />
            <div class="card-body">
              <h3>${recipe?.title}</h3>
              <p><i class="fas fa-utensils"></i> ${recipe?.publisher}</p>
              <div class="card-footer-row">
                <span class="publisher-tag">${recipe?.publisher}</span>
                <button class="view-btn">View →</button>
              </div>
            </div>
          </div>
        `;
        });

