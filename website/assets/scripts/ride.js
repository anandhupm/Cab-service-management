function ride(e){
    e.preventDefault();
    console.log("entered ride function")
    var pickup = document.getElementById('pickup');
    var des = document.getElementById('des');
    var rideHelp = document.getElementById('rideHelp');

    console.log(pickup.value);
    if(pickup.value==des.value)
    {
        e.preventDefault();
        rideHelp.innerText = "Pickup and Destination cannot be same";

    }
    
    
    

}