let Table = document.querySelector ("#Table").firstElementChild;

if (localStorage.getItem("basket") != null) {
    let array = JSON.parse(localStorage.getItem("basket"));
    
    array.forEach(product => {
        let tr = document.createElement ("tr");
        
        let tdImage = document.createElement ("td");
        let Image = document.createElement ("img");
        Image.src = product.imageURL;
        Image.style.width = "120px";
        tdImage.append(Image);
        
        let tdName = document.createElement ("td");
        tdName.innerText = product.name;

        let tdPrice = document.createElement ("td");
        tdPrice.innerText = "$" + product.price;

        let tdCount = document.createElement ("td");
        tdCount.innerText = product.count;


        let tdDelete = document.createElement ("td");
        let Delete = document.createElement ("i");
        Delete.classList.add("fa-solid");
        Delete.classList.add("fa-trash");
        Delete.style.color = "red";
        Delete.style.cursor = "pointer";
        tdDelete.append(Delete);

        
        Delete.onclick = function () {
            let NewArray = array.filter(function (value) {
                value.id != product.id;
            })

            array += NewArray;
        }


        tr.append(tdImage, tdName, tdPrice, tdCount, tdDelete);
        Table.lastElementChild.append(tr);
    });
}