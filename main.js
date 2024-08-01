fetch("https://fakestoreapi.com/products?limit=10")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const bigWrapper = document.querySelector(".wrapper");
            const userTitle = document.createElement("h2");
            userTitle.className = "Title";
            const userDescription = document.createElement("p");
            userDescription.className = "Description";``
            const userCategory = document.createElement("i");
            const wrapper = document.createElement("div");
            const Image = document.createElement("img");
            Image.className = "Image"
            wrapper.className = "cards";

            Image.src = item.image;
            userTitle.textContent = item.title;
            userDescription.textContent = item.description;
            userCategory.textContent = `Category: ${item.category}`;

            wrapper.append( Image,userTitle,userCategory,userDescription);
            bigWrapper.appendChild(wrapper);
        });
    });
