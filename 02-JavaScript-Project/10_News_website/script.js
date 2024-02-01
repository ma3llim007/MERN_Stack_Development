// Getting The Data From API
async function GetNewsData() {
    const News = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-01-31&to=2024-01-31&sortBy=popularity&apiKey=14565f4ebd264024815ce7677df68f1d')
    const ResultData = await News.json()
    const ResutlArticle = ResultData.articles;
    const NewsData = document.getElementById("NewsData");
    let card = "";
    ResutlArticle.forEach((e,index) => {
        let title = e.title.substring(0,30);
        let description = e.description.substring(0,76);
        let image = e.urlToImage;
        let url = e.url;
        if (index <= 20) {
            card +=
                `
                    <div class="col-md-4">
                        <div class="card m-2" style="width: 23rem;cursor:pointer">
                            <img src="${image}" class="card-img-top" alt="${title}">
                            <div class="card-body">
                                <h5 class="card-title"><strong>${title}...</strong></h5>
                                <p class="card-text">${description}...</p>
                                <a href="${url}" class="btn btn-primary" target="_blanks">Read More</a>
                            </div>
                        </div>
                    </div>
            
                `
        }
    });
    NewsData.innerHTML = card;
}
GetNewsData();