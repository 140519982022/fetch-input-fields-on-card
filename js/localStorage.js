

var result = document.querySelector(".cardsection");

var fromData = document.querySelector('form');

fromData.addEventListener("submit", (data) => {
    data.preventDefault();

    var userDetails = JSON.parse(localStorage.getItem('userDetails')) ?? [];
    var userNAme = data.target.name.value;
    var userAge = data.target.age.value;

    var meargeData = {
        'name' : userNAme,
        'age' : userAge
    }

    userDetails.push(meargeData);

    localStorage.setItem('userDetails',JSON.stringify(userDetails));

    data.target.reset();
    getData();
})


function getData() {
    var item = '';

    var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    userDetails.forEach((v,i) => {

        item += `<div class="card">
        <span onclick="removedItem(${i})"><b>&times;</b></span>
        <b>Name :</b>
        <p> ${v.name}</p>
        <b>Age :</b>
        <p>${v.age}</p>
        </div>`;

    })
    
    result.innerHTML = item;
}



function removedItem(index) {
    var userDetails = JSON.parse(localStorage.getItem('userDetails')) ?? [];
    userDetails.splice(index,1);
    localStorage.setItem('userDetails',JSON.stringify(userDetails));


    getData();
    
}

getData();
