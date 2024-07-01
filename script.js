let currentPage = 2;
const PAGES = 3;

function showPage(page) {
    for (let i = 1; i <= PAGES; i++) {
        document.getElementById("div" + i).classList.remove("run")
        document.getElementById("page" + i).classList.remove("active");
        
    }
    document.getElementById("div" + page).classList.add("run")
    document.getElementById("page" + page).classList.add("active");
}

function nextPage() {
    currentPage = (currentPage % PAGES) + 1;
    showPage(currentPage);
}

function prevPage() {
    currentPage = ((currentPage - 2 + PAGES) % PAGES) + 1;
    showPage(currentPage);
}