let AddButtons = document.querySelectorAll (".ContentBox");
let ProductCount = document.querySelector (".productCount");

AddButtons.forEach(item => {
    let AddButton = item.lastElementChild;

    AddButton.onclick = function (event) {
        event.preventDefault();

        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let array = JSON.parse(localStorage.getItem("basket"));
        
        let ProductId = this.parentElement.parentElement.getAttribute ("data-id");

        let existProduct = array.find(p=>p.id==ProductId);

        if (existProduct == undefined) {
            array.push({
                id: ProductId,
                imageURL: this.parentElement.previousElementSibling.firstElementChild.getAttribute ("src"),
                name: this.previousElementSibling.previousElementSibling.innerText,
                price: this.previousElementSibling.firstElementChild.innerText,
                count: 1
            })
        }

        else {
            existProduct.count++;
        }

        localStorage.setItem("basket", JSON.stringify(array));

        WriteProductCount ();
    }
});

function WriteProductCount () {
    if (localStorage.getItem("basket") != null) {
        let array = JSON.parse(localStorage.getItem("basket"));
        
        let TotalCount = 0;
        array.map(product=>{
            TotalCount += product.count;
        });

        ProductCount.innerText = TotalCount;
    }
}

WriteProductCount ();