let filterInput = document.querySelector("#filterInput");

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get Value of Input

    let filterValue = document.querySelector("#filterInput").value.toUpperCase();

    // Get Names UL
    let ul = document.querySelector("#names");

    // Get Lis 
    let li = ul.querySelectorAll('li.collection-item');

    // Loop
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}