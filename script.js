$("button").click(function(){
    var message=$("#Name").val();
    $("#myid").text("Hello, my name is " + message);
});

$("button").click(function(){
    var visiting=$("#visit").val();
    $("#myid").text("I visit my family " + visiting);
});

$("button").click(function(){
    var location=$("#live").val();
    $("#myid").text("My family lives in " + location);
});

$("button").click(function(){
    var message=$("#Name").val();
    
    var visiting=$("#visit").val();
    
    var location=$("#live").val();
    
    $("#myid").text("Hi, " + message + "  " + "and in 2026 you will have" + "  " + visiting + "  " + "children and be living in" + "  "+ location + ".");
    $("#myid").append(" You will also be making " + (parseInt(visiting) * 30000) + " each year."); 
});
