const categoryContainer = document.getElementById("category-container");

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCatergory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};
loadCategory();

const showCatergory = (categories) => {
  categories.forEach((cat) => {
    categoryContainer.innerHTML += ` <li id="${cat.id}" class="hover:border-b-3 border-red-600 cursor-pointer">
                                                  ${cat.title}
                                        </li>`;
  });
};
