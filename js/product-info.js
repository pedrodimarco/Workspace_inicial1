function showImagesGallery(array) {

    let htmlContentToAppend = "";
    let htmlContentToAppendList = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        if (i == 0) {
            htmlContentToAppendList += `
            <li data-target="#carouselExampleIndicators" data-slide-to="`+ [i] + `" class="active"></li>
            `
            htmlContentToAppend += ` 
            <div class="carousel-item active">
                <img src="`+ imageSrc + `" class="d-block w-100" alt="">
            </div>   
            `
        }
        else {
            htmlContentToAppendList += `
            <li data-target="#carouselExampleIndicators" data-slide-to="`+ [i] + `"></li>
            `
            htmlContentToAppend += ` 
            <div class="carousel-item">
                <img src="`+ imageSrc + `" class="d-block w-100" alt="">
            </div>   
            `
        }

    }
    document.getElementById("imagen-carousel").innerHTML = htmlContentToAppend;
    document.getElementById("lista-ordenada").innerHTML = htmlContentToAppendList;
}

function showRelatedProducts(array) {
    let htmlContentToAppend = "";
    let related = product.relatedProducts;

    for (let i = 0; i < related.length; i++) {
        let j = related[i];

        let proRel = array[j];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <a class="list-group-item list-group-item-action" href="product-info.html?name=` + proRel.name + `" class="list-group-item list-group-item-action">
              <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + proRel.imgSrc + `" alt="">
                <strong> ` + proRel.name + " " + proRel.currency + " " + proRel.cost + ` </strong>
              </div>
            </a>
        </div>
        `

        document.getElementById("related-products").innerHTML = htmlContentToAppend;
    }
}

function showCommentsList() {

    let htmlContentToAppend = "";

    for (let i = 0; i < comments.length; i++) {
        let comm = comments[i]

        var score = "";
        for (let i = 1; i <= comm.score; i++) {
            score += `<span class="fa fa-star checked"></span>`
        }
        for (let i = comm.score; i < 5; i++) {
            score += `<span class="fa fa-star"></span>`
        }

        htmlContentToAppend += `
        <a class="list-group-item-action">
            <div class="row">
                
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1"><strong> ` + comm.user + `</strong></h4>
                        <small class="text-muted">` + comm.dateTime + `</small>
                    </div>
                    <p>` + comm.description + `</p>
                    <h4>` + score + `</h4>
                </div>
            </div>
            <hr>
        </a>
        `
    }
    document.getElementById("comments-container").innerHTML = htmlContentToAppend;
}

function addComment(comentario) {

    let htmlContentToAppend = "";
    comm = comentario;

        htmlContentToAppend += `
        <a class="list-group-item-action">
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1"><strong> ` + comm.user + `</strong></h4>
                        <small class="text-muted">` + comm.dateTime + `</small>
                    </div>
                    <p>` + comm.description + `</p>
                    <h4>` + comm.score + `</h4>
                </div>
            </div>
            <hr>
        </a>
        `
    document.getElementById("comments-container").innerHTML += htmlContentToAppend;
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productCategoryHTML = document.getElementById("car-category");
            let productNameHTML = document.getElementById("car-name");
            let productDescriptionHTML = document.getElementById("car-description");
            let productCountHTML = document.getElementById("car-count");
            let productCostHTML = document.getElementById("car-price");

            productCategoryHTML.innerHTML += product.category;
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productCostHTML.innerHTML += product.currency + " " + product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
        getJSONData(PRODUCTS_URL).then(function (resultObj2) {
            if (resultObj2.status === "ok") {

                products = resultObj2.data;
                showRelatedProducts(products);
            }
        });

        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                comments = resultObj.data;
                showCommentsList(comments);
            }

        });
    });
})


//Coloca el comentario realizado por el usuario en la lista de comentarios
document.getElementById("crik").addEventListener("click", function(e) {

    function scoreCheck() {
        var radio = document.getElementsByName("rating");
        let htmlContentToAppend = "";

        if (radio[0].checked) {
            return htmlContentToAppend = 
            `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>` ;
        }
        if (radio[1].checked) {
            return htmlContentToAppend = 
            `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>` ;
        }
        if (radio[2].checked) {
            return htmlContentToAppend = 
            `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>` ;
        }
        if (radio[3].checked) {
            return htmlContentToAppend = 
            `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>` ;
        }
        if (radio[4].checked) {
            return htmlContentToAppend = 
            `<span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>` ;
        }

    }
    score = scoreCheck();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    let newComment = [{
        "score": "",
        "description": "",
        "user":  "",
        "dateTime": ""
    }];
    newComment.score = scoreCheck();
    newComment.description = document.getElementById("userComment").value;
    newComment.user = localStorage.getItem('cuenta');
    newComment.dateTime = dateTime;
    addComment(newComment);
})