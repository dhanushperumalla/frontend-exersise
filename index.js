let movies = [
    {
        name:"Valmiki",
        poster:"https://wallpapercave.com/wp/wp10314727.jpg",
        rating:8.3
    },
    {
        name:"Dhuvada Jaganadham",
        poster:"https://e0.pxfuel.com/wallpapers/959/472/desktop-wallpaper-allu-arjun-pooja-hegde-dj-telugu-movie-posters-dj-allu-arjun.jpg",
        rating:6.2
    },
    {
        name:"AA",
        poster:"https://upload.wikimedia.org/wikipedia/mai/f/f4/A_Aa_Telugu_movie_poster.jpg",
        rating:6.9
    },
    {
        name:"Winner",
        poster:"https://mellowplex.s3.amazonaws.com/uploads/item_media/asset/16937/Winner-Telugu-Movie-Posters-1.jpg",
        rating:8.7
    },
    {
        name:"Yeto Velipoyindi Manasu",
        poster:"https://i.pinimg.com/originals/c8/bb/96/c8bb96f805c9504b3f7f0cb219ccbc7c.jpg",
        rating:9.3
    },
    {
        name:"Poster",
        poster:"https://m.media-amazon.com/images/M/MV5BMmJjNGM0MDAtYjBkNy00YWYyLWJkNGUtZTQyNjBlMzNhZDM2XkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_.jpg",
        rating:9.2
    },
    {
        name:"Love Story",
        poster:"https://files.prokerala.com/movies/pics/800/birthday-poster-of-sai-pallavi-movie-113601.jpg",
        rating:9.2
    },
    {
        name:"Macharle NiyojakaVargam",
        poster:"https://imgcdn.ragalahari.com/may2022/designs/macherla-niyojakavargam-posters/macherla-niyojakavargam-posters1t.jpg",
        rating:6.8
    },
    {
        name:"Pushpa",
        poster:"https://i.pinimg.com/736x/c0/5b/92/c05b9232e2735febae8272e159fde82c.jpg",
        rating:9.2
    },
    {
        name:"CUSTODY",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PVFulp8bzbkmhUVQ_OKkqQi-xfZUtZ0Yyg&usqp=CAU",
        rating:9.8
    },
    {
        name:"RRR",
        poster:"https://i.etsystatic.com/20387760/r/il/f3a7ff/4445210431/il_fullxfull.4445210431_1rod.jpg",
        rating:9.8
    }
];

function searchMovie(){
    let movieName = document.getElementById('search').value;
    
    if(movieName!==""){

        let result = movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })

        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

// {/*<div class="one"></div> */}

// let movie = document.createElement("div");
// movie.classList.add('one');

function displayMovies(data){

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for(let i=0;i<data.length;i++){
        htmlString=htmlString+`
        
        <div class="movie">
        <div class="overlay">
            <div class="vedio"></div>
            <div class="details">
            <h1>${data[i].name}</h1>
            <h1>IMDB: ${data[i].rating}</h1>
            <p>Movies Adda<br>Created by Dhanush</p>
            </div>
        </div>
        <img
            class="poster"
            src="${data[i].poster}"
            alt="poster"
        />
    </div>     
        
        `
    }
    
    document.getElementById("movies").innerHTML=htmlString;
   
}
displayMovies(movies);




 // let movieDiv = document.createElement("div");
    // movieDiv.classList.add("movie");

    // let overlayDiv = document.createElement("div");
    // overlayDiv.classList.add("overlay");

    // movieDiv.appendChild(overlayDiv);

    // console.log(movieDiv);
