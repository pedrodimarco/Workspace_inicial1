var productsArray = [];

function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];

        console.log(array);

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ products.name +`</h4>
                        <small class="text-muted">` + products.soldCount + ` artículos</small>
                    </div>
                    <p>` + products.description + `</p><br>
                    <h4>` + products.currency + ` ` + products.cost + `</h4>
                </div>
            </div>
        </div>
        `
    

        document.getElementById("lista_productos").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
showSpinner();
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
    if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
        hideSpinner();
    });
});