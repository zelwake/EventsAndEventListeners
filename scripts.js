$("#firstButton").click(() => {
    console.log("Yeah, you clicked me")
})

$("#secondButton").click(() => {
    $("#firstButton").text("Clicked");
})