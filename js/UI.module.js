export class displayGame {
  constructor(response) {
    this.response = response;
    this.gameSection = document.querySelector("#gameDisplay");
    this.detailsSection = document.querySelector("#detailedInfo");
    this.getData();
    this.getDetailedData()
  }
  getData() {
    if(this.response.length > 0){
        let container = ``;
        this.response.forEach((element) => {
          container += `<div class="col">
              <div class="card h-100 bg-transparent" data-id=${element.id}>
                <div class="card-body">
                  <img src=${element.thumbnail} class="card-img-top object-fit-cover" alt="">
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <h5 class="card-title small ">${element.title}</h5>
                    <a href="#" class="btn small">Free</a>
                  </div>
                  <p class="card-text small text-center opacity-50 pb-2">
                    ${element.short_description}
                  </p>
                </div>
                <div class="card-footer small d-flex justify-content-between">
                  <span class="badge badge-color">${element.genre}</span>
                  <span class="badge badge-color">${element.platform}</span>
                </div>
              </div>
            </div>`;
        });
        this.gameSection.innerHTML = container;
    }
  }
  getDetailedData() {
    let element = `<div class="col-md-4"><img class="w-100" src=${this.response.thumbnail} id="game-img" alt=""></div>
        <div class="col-md-8">
          <h3>Title: ${this.response.title}</h3>
          <p>Category: <span class="badge text-bg-info">${this.response.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info">${this.response.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info">${this.response.status}</span> </p>
          <p class="small">${this.response.description}
          </p>
          <a class="btn btn-outline-warning" target="_blank" href="#">Show
            Game</a>
        </div>`;
        this.detailsSection.innerHTML=element
  }
}
