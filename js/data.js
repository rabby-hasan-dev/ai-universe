const loadAiData = (dataLimit) => {
  ///  start loader spinner
  toggleSpinner(true);

  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayAiData(data.data.tools));


}


const displayAiData = (data) => {
  const hubContainer = document.getElementById('hub-container');

  //  display only 6 data
  if (data.length > 6) {
    data = data.slice(0, 6);
    const seeMore = document.getElementById('see-more');
    seeMore.classList.remove('d-none');
  }
  else {
    const seeMore = document.getElementById('see-more');
    seeMore.classList.add('d-none');
  }

  // display all data

  data.forEach(data => {
    // console.log(data);
    const hubDive = document.createElement('div');
    hubDive.classList.add('col');
    hubDive.innerHTML = `
        <div class="card h-100 p-3 rounded">
        <img src="${data.image} " class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title">Features</h1>
          <ol>
          <li>Natural language processing</li>
          <li> Contextual understanding</li>
          <li>Text generation</li>
        </ol>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <div>
          <h1 class="card-title">${data.name}</h1>
          <h5 class="card-title"><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</h5>
          </div>
          <div>
            <button onclick="loadAiDetails('${data.id}')" class="bg-danger-subtle rounded-circle border border-0 " data-bs-toggle="modal" data-bs-target="#ai-details" ><i class="fa-solid p-2  fa-arrow-right"></i></button>
          </div>
        
        </div>
      </div>       
        
        `
    hubContainer.appendChild(hubDive);

    // stop loader
    toggleSpinner(false);

  });
}

// loader operation common function
const toggleSpinner = (isLoading) => {

  const loaderSection = document.getElementById('loader');

  if (isLoading) {

    loaderSection.classList.remove('d-none');

  }
  else {

    loaderSection.classList.add('d-none');
  }

}


// see more button operation 
document.getElementById('btn-see-more').addEventListener('click', function () {


});

// load-Ai-Details
const loadAiDetails = (id) => {
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayAiDetails(data));
}

const displayAiDetails = (Ai) => {
  console.log(Ai.data);
  const displayAiDetailsCard = document.getElementById('display-ai-details');

  // const detailsDiv = document.createElement('div');
  // detailsDiv.classList.add('ai-details');
  displayAiDetailsCard.innerHTML = `

  <div class=" w-50 p-4 mb-3 bg-danger-subtle rounded " style="max-width: 18rem;">
                <div class="header bg-warning  ">
                <p> ${Ai.data.description}</p>
                </div>
                <div class="body d-flex justify-content-between ">
                <div class="p-2 bg-secondary-subtle" >
                ${Ai.data.pricing[0].plan}
                ${Ai.data.pricing[0].price}
               </div>
               <div class="p-2 bg-secondary-subtle">
                ${Ai.data.pricing[1].plan}
               ${Ai.data.pricing[1].price}
               </div>
               <div class="p-2 bg-secondary-subtle">
                ${Ai.data.pricing[2].plan}
               ${Ai.data.pricing[2].price}
               </div>
                </div>
                <div class="footer d-flex ">
                <div class="features">
                  <h3>Features</h3>
                  <ul>
                    <li>${Ai.data.features.feature_name} </li>
                    <li>Multilingual support</li>
                    <li> Seamless integration</li>
                  </ul>
                </div>
                <div class="Integrations">
                  <h3>Integrations</h3>
                  <ul>
                    <li>${Ai.data.integrations[0]} </li>
                    <li>${Ai.data.integrations[1]}</li>
                    <li> ${Ai.data.integrations[2]}</li>
                  </ul>
                </div>
                </div>
              </div>
              <!-- banner section -->
            
              <div class="card  w-50 p-3 rounded "> 
                <img src="${Ai.data.image_link} " class="rounded fluid" alt="image">
                <div >
                  <h2> ${Ai.data.input_output_examples[0].input}</h2>
                  <p>${Ai.data.input_output_examples[0].output}</p>
                </div>




  
  `
  
  // displayAiDetailsCard.appendChild(detailsDiv);
  

}


loadAiData();

