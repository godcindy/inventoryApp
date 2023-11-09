const inventory = [
    {
    Name: "The Alchemist"
    Author: "Paolo Coelho"
    Price($): 20
    Amount: 0
    },
    {
    Name: "The Goldfinch"
    Author: "Donna Tartt"
    Price($): 20
    Amount: 0
    },
    {
     Name: "Killers of the Flower Moon"
    Author: "David Grann"
    Price($): 20
    Amount: 0
    },
]

const currentStock = document.createElement("span")
currentStock.textContent = "0"

// resents when submit is pressed
formElement.reset();