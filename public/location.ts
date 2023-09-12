
console.log("loaded ajay location ts")

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
   
  
  function showPosition(position:any){
    console.log(position)}
  }
  getLocation();