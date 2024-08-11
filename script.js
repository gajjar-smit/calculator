let string = ""
let buttons = document.querySelector(".buttons").children
console.log(buttons)
Array.from(buttons).forEach((btns) => {
    btns.addEventListener('click', (e) => {




        switch (e.target.innerHTML) {
            case '=':
                string = eval(string)
                document.getElementById("display").value = string


                break;
            case 'cl':

                string = ""
                break;

            default:
                console.log(e.target);
                string = string + e.target.innerHTML
                break;
        }
        document.getElementById("display").value = string

    })
})