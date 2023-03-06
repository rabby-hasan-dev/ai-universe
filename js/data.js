const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch(url)
  .then(res => res.json())
  .then(data => displayData(data.data.tools));

const displayData = (data) => {
  const hubContainer = document.getElementById('hub-container');

  data.forEach(data => {
    console.log(data);
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
            <button class="bg-danger-subtle rounded-circle border border-0 " ><i class="fa-solid p-2  fa-arrow-right"></i></button>
          </div>
        
        </div>
      </div>       
        
        `
    hubContainer.appendChild(hubDive);


  });
}