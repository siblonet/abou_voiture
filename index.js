const cars_rendering = document.getElementById('render_cares');

const DisplayCars = async () => {
    console.log("called");
    const car_content = [{
        _id: "4970kh567rqsax",
        image: [
            {
                ima: "images/a1.jpg"
            },
            {
                ima: "images/a2.jpg"
            },
            {
                ima: "images/a3.jpg"
            },
            {
                ima: "images/a4.jpg"
            },
            {
                ima: "images/a5.jpg"
            }
        ],
        phone: "0545400359"
    }
    ];

    cars_rendering.innerHTML = "";
    if (car_content.length) {
        car_content.forEach((car, index) => {
            const car_html = `
        
        <div class="row">

        <div class="col-lg-4 margin_top_30">
           <div class="full margin_top_30">
              <h3 class="main_heading _left_side margin_top_30">En Vente</h3>
              <p class="large">Cette voiture est en très bon état, une très bonne occasion a ne pas rater</p>
           </div>
           <div class="full button_section margin_top_30">
              <a href="tel:${car.phone}">Plus Info</a>
           </div>
        </div>

        <div class="col-lg-8">
           <div class="full margin_top_50_rs">
              <div class="car_viewa">
                 <img class="img-responsive" src="${car.image[0].ima}" alt="#" />
                 <img class="img-responsive" src="${car.image[1].ima}" alt="#" />
              </div>
              <div class="car_viewb">
                 <img class="img-responsive" src="${car.image[2].ima}" alt="#" />
                 <img class="img-responsive" src="${car.image[3].ima}" alt="#" />
                 <img class="img-responsive" src="${car.image[4].ima}" alt="#" />
              </div>
           </div>
        </div>

     </div>  
                        `;

            cars_rendering.innerHTML += car_html;

        });
    } else {
        cars_rendering.innerHTML = `
    

        <div class="row">
        <div class="col-lg-4 margin_top_30">
           <div class="full margin_top_30">
              <h3 class="main_heading _left_side margin_top_30">Pas de voiture</h3>
              <p class="large">Il n'y a pour l'instant pas de voiture en ventes</p>
           </div>
        </div>
     </div>


    `;

    }
}

DisplayCars();
