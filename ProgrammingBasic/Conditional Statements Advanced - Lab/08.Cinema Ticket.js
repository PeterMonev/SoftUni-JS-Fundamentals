function cinemaTicket(input){
    const day = input[0];

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Friday": console.log(12);
        break;
        case "Wednesday":
        case "Thursday": console.log(14);
        break;
        default: console.log (16)

    }










}
cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);