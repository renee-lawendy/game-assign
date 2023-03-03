import { displayGame } from "./UI.module.js";
import { Details } from "./Details.module.js";
export class Games {
  constructor() {
    this.categoryLinks = Array.from(document.querySelectorAll(".nav-link"));
    this.categoryLinks.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.loader.classList.remove("d-none");
        this.getValue(e);
      });
    });

    this.loader = document.querySelector(".loading");
    this.getApi();

  }
  getValue(e) {
    let categoryLink = e.target;
    let categoryId = e.target.getAttribute("data-category");
    this.selectLink(categoryLink);
    this.getApi(categoryId);
  }

  selectLink(target) {
    this.categoryLinks.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        target.classList.add("active");
      }
    });
  }
  async getApi(category = "mmorpg") {
    this.loader.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "31d7322998mshf5862a85d880da9p14c9bdjsn137f04e0b6ea",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let response = await api.json();
    let getResponse = new displayGame(response);
    this.loader.classList.add("d-none");
    this.targetcard();
  }
  targetcard() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", function () {
        let targetId = this.getAttribute("data-id");

        let targetGame = new Details(targetId);

        document.querySelector(".games").classList.add("d-none")
        document.querySelector(".details").classList.remove("d-none");
        console.log(targetId);
      });
    });
  }

}
