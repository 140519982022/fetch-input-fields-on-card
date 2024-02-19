var userDetails = [] ;

var result = document.querySelector(".cardsection");

var fromData = document.querySelector('form');

fromData.addEventListener("submit", (data) => {
    // alert("hiiii");
    data.preventDefault();
    var userNAme = data.target.name.value;
    var userAge = data.target.age.value;

    var meargeData = {
        'name' : userNAme,
        'age' : userAge
    }

    userDetails.push(meargeData);
    data.target.reset();
    getData();
})

function getData() {
    var item = '';
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
    userDetails.splice(index,1);

    getData();
    
}