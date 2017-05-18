$('#tab_option').click(function(e){
    e.preventDefault;
    var id=$(e.target).attr("value");
    $(this).parent().next().removeClass().addClass("hide");
    console.log("1");
    $('#id').addClass("show");
});