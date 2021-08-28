$(function() {
    var counterProducts=0;
    var counterOthers=0;
    var image=0;
    $("#products").click(function(){
        counterProducts+=1
        console.log(counterProducts)
        if(counterProducts%2!=0){
        $("#listOfProducts").removeClass("hidden");
        $("#listOfProducts").addClass("displayProducts");
        } else{
        $("#listOfProducts").removeClass("displayProducts");
        $("#listOfProducts").addClass("hidden");
        };
    })
    $("#others").click(function(){
        counterOthers+=1
        console.log(counterOthers)
        if(counterOthers%2!=0){
        $("#listOfOthers").removeClass("hidden");
        $("#listOfOthers").addClass("displayOthers");
        } else{
        $("#listOfOthers").removeClass("displayOthers");
        $("#listOfOthers").addClass("hidden");
        };
    })

    $("#sliderLeft").click(function(){
        console.log("Kliknięcie w lewo")
    });
    $("#sliderRight").click(function(){
        console.log("Kliknięcie w prawo")
        
        image=+1;
        console.log(image)
        if(image = 1){
            $(".sliderImage").src="takis.png"
        }
        
    });
})