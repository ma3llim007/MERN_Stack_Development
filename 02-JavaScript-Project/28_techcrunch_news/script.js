const contentData = document.getElementById("contentData");
fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F")
    .then(response => response.json())
    .then(data => {
        if (data.status === "ok") {
            contentData.innerHTML = " ";
            let FetchItem = data.items;
            FetchItem.forEach((item) => {
                const liElement = document.createElement("li");
                const liH2Heading = document.createElement("h2");
                const secondDiv = document.createElement("div");
                const liH3Heading = document.createElement("h3");
                const liH4Heading = document.createElement("h3");
                const liparagraph = document.createElement("p");
                const AchorTag = document.createElement("a");
                const thirdDiv = document.createElement("div");
                liH2Heading.innerText = item.title;
                liH3Heading.innerHTML = `Author:- <strong>${item.author}</strong>`;
                liH4Heading.innerHTML = `Publish Date:- <strong>${item.pubDate}</strong>`;
                liparagraph.innerHTML = item.description.split("<p>").join("").split("</p>").join("").replace("© 2024 TechCrunch. All rights reserved. For personal use only.", "").replace("[…]", "...");
                AchorTag.innerText = "Read More";
                AchorTag.href = item.link;
                AchorTag.target = "_blanks";
                liElement.appendChild(liH2Heading);
                secondDiv.appendChild(liH3Heading);
                secondDiv.appendChild(liH4Heading);
                liElement.appendChild(secondDiv);
                liElement.appendChild(liparagraph);
                liparagraph.appendChild(AchorTag);
                const Categories = item.categories;
                thirdDiv.classList.add("category-div")
                Categories.forEach((category) => {
                    let span = document.createElement("span");
                    span.innerText = category;
                    thirdDiv.appendChild(span);
                });
                liElement.appendChild(thirdDiv);
                contentData.append(liElement);
            });
        }
        else {
            let liElement = document.createElement("li");
            liElement.innerText = "Something Went Wrong!";
            liElement.classList.add("liError");
            contentData.append(liElement);
        }
    });