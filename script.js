$(document).ready(function(){
    $(".sortAge").on("click", function(){
        $(".age").filter(function(){
            let num = ($(this).text());
            return num <= 25;
        }).parentsUntil(".container").hide();
    });
});

$(".addFriend").on("click", function(){
    alert("Friend has been added!");
});