var images = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4469/674469-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4385/674385-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9308/1269308-h-26da4df3decc",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8722/1078722-h-82919d0d3c64",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7518/1097518-h-1b558692d29f",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5019/675019-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2352/1282352-h-23698d5e8f30",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8679/1028679-h-f9e901f53b9b",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1819/911819-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4661/674661-h",
];
let MoviesList = [
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5171/875171-v",
    movieName: "Avengers : Infinity War",
    IMDb_Rating: 8.4,
    releaseDate: "27th April 2018",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5195/875195-v",
    movieName: "Captain Marvel",
    IMDb_Rating: 6.8,
    releaseDate: "8th March 2019	",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3786/663786-h",
    movieName: "Black Panther",
    IMDb_Rating: 6.7,
    releaseDate: "29th June 2021",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5244/675244-v",
    movieName: "Ant-Man & The Wasp",
    IMDb_Rating: 7.0,
    releaseDate: "25th June 2018",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4722/674722-v",
    movieName: "Avengers : Age of Ultron",
    IMDb_Rating: 7.3,
    releaseDate: "24th April 2015	",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v",
    movieName: "Avengers : Endgame",
    IMDb_Rating: 8.4,
    releaseDate: "26th April 2019",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5126/675126-v",
    movieName: "Captain America : Civil War",
    IMDb_Rating: 7.8,
    releaseDate: "6th May 2016",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/674856-v",
    movieName: "Guardian of The Galaxy",
    IMDb_Rating: 8.0,
    releaseDate: "8th August 2014",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4782/674782-v",
    movieName: "Thor",
    IMDb_Rating: 7.0,
    releaseDate: "29th April 2011",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5049/675049-v",
    movieName: "Iron Man",
    IMDb_Rating: 7.9,
    releaseDate: "1st May 2008	",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v",
    movieName: "Doctor Strange",
    IMDb_Rating: 7.1,
    releaseDate: "6th May 2015",
  },
  {
    image_Url:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/445/1770000445/1770000445-v",
    movieName: "The Wolverine",
    IMDb_Rating: 6.7,
    releaseDate: "26th July 2013",
  },
];
var statusL = localStorage.getItem("status");

if (statusL == 1) {
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "none";
  document.getElementById("para").style.display = "none";
  document.getElementById("logout").style.display = "block";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("logo").style.marginRight = "800px";
  document.getElementById("welcome").innerText = "Welcome";
  var ud = JSON.parse(localStorage.getItem("userData")) || [];
  var checkemail = localStorage.getItem("emailUserCheck");
  for (var i = 0; i < ud.length; i++) {
    if (checkemail == ud[i].emailID) {
      document.getElementById("welcome").innerText = "Welcome " + ud[i].nameu;
    }
  }

 
  displayMovies(MoviesList);
  function displayMovies(MoviesList) {
    document.getElementById("movies").innerHTML = "";
    MoviesList.map(function (movie) {
      var moviecontent = `<div>
          <img
            src="${movie.image_Url}"
            alt=""
          />
        </div>
        <hr />
        <div>
          <h2>${movie.movieName}</h2>
          <h2>IMDb Rating: ${movie.IMDb_Rating}</h2>
          <h2>${movie.releaseDate}</h2>
        </div>`;
      var div = document.createElement("div");
      div.innerHTML = moviecontent;
      div.setAttribute("class", "moviesList");
      document.getElementById("movies").append(div);
    });

    document.getElementById("sort-hl").addEventListener("click", function () {
      sortHTL(MoviesList);
    });
    document.getElementById("sort-lh").addEventListener("click", function () {
      sortLTH(MoviesList);
    });
    function sortHTL(MoviesList) {
      MoviesList.sort(function (a, b) {
        return b.IMDb_Rating - a.IMDb_Rating;
      });
      displayMovies(MoviesList);
    }
    function sortLTH(MoviesList) {
      MoviesList.sort(function (a, b) {
        return a.IMDb_Rating - b.IMDb_Rating;
      });
      displayMovies(MoviesList);
    }
  }
}
function logout() {
  localStorage.setItem("status", 0);
}
 var imageMovies = document.createElement("img");

 var i = 0;

 x = setInterval(function () {
   if (i === images.length) {
     i = 0;
   }
   imageMovies.src = images[i];
   imageMovies.className = "slideshowIMG";
   i++;
 }, 2000);

 document.getElementById("slideshow").append(imageMovies);