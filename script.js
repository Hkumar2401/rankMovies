
// movies array for entering movies data
let movies = [

    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },

    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },

    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },

    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    },

    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },

    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },

    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },

    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },

    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },

    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },

];

window.onload = () => {
    displayMovies(movies);
};


document.body.querySelector("#sort-btn").addEventListener("click", function(){

    let attr = document.querySelector("#input").value;

    let sortedMovies = sortMoviesByAttr(movies, attr);
    
    document.body.querySelector("tbody").remove();
    let tbodyElement = document.createElement("tbody");
    let selectedTable = document.querySelector(".table");
    selectedTable.appendChild(tbodyElement);
    tbodyElement.setAttribute("id", "content");
    
    displayMovies(sortedMovies);

})
    


// function to display the sorted movies
function displayMovies(movies) {


    for (let i = 0; i < movies.length; i++) {


        let row = document.createElement("tr");
        document.querySelector("#content").appendChild(row);

        let idData = document.createElement("td");
        row.appendChild(idData);
        idData.innerHTML = movies[i].id;

        let titleData = document.createElement("td");
        row.appendChild(titleData);
        titleData.innerHTML = movies[i].title;

        let rankData = document.createElement("td");
        row.appendChild(rankData);
        rankData.innerHTML = movies[i].rank;


    }
}



// function to sort the movies with respect to attribute
function sortMoviesByAttr(movies, attr){
    
    for(let i=0; i<movies.length-1; i++){
        for(let j=i+1; j<movies.length; j++){
                
                if(movies[j][attr] > movies[i][attr]){
                    let a = movies[j];
                    movies[j] = movies[i];
                    movies[i] = a;
                }
           
        }
    }
    return movies;
}
