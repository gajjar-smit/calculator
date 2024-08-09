let string = ""
let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((btns) => {
    btns.addEventListener('click', (e) => {




        switch (e.target.innerHTML) {
            case '=':
                string = eval(string)
                document.getElementById("in1").value = string


                break;
            case 'cl':

                string = ""
                break;

            default:
                console.log(e.target);
                string = string + e.target.innerHTML
                break;
        }

        // if (e.target.innerHTML == '=') {
        //     string = eval(string)
        //     document.getElementById("in1").value = string
        // }
        // else if (e.target.innerHTML == 'cl') {
        //     string = ""

        // }
        // else {

        //     console.log(e.target);
        //     string = string + e.target.innerHTML
        // }
        document.getElementById("in1").value = string

    })
})