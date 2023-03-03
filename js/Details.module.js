import { displayGame } from "./UI.module.js";
export class Details {
  constructor(id) {
    this.id = id;
    this.closeBtn = document.querySelector("#btnClose");
    this.closeBtn.addEventListener("click", () => {
      this.closingBtn();
    });
    this.loader = document.querySelector(".loading");
    this.fetchDetails(id);
  }
  async fetchDetails(id) {
    this.loader.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "31d7322998mshf5862a85d880da9p14c9bdjsn137f04e0b6ea",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let result = await api.json();
    console.log(result);
    
    let specificGame = new displayGame(result);
    this.loader.classList.add("d-none");
  }
  closingBtn() {
    document.querySelector(".details").classList.add("d-none");
    document.querySelector(".games").classList.remove("d-none");
  }
}
