$("#form").on("submit",function(){
   var data = {
       fname: $("#first_name").val(),
       lname: $("#last_name").val(),
       city: $("#city").val(),
       riskFactor: $("#risk_factor").val()
   }
   $.ajax({
       url:"/api/closetohome",
       method:"POST",
       data: data
   }).then(function(response){
       console.log(response)
   })
})
$("#info").on("submit",function(){
    var data = {
        description: $("#description").val()
    }
    $.ajax({
        url:"/api/needs",
        method:"POST",
        data: data
    }).then(function(response){
        console.log(response)
    })
 })
 $("#sickness").on("submit",function(){
    var data = {
        fname: $("#f_name").val(),
        lname: $("#l_name").val(),
        description: $("#symptons").val()
    }
    $.ajax({
        url:"/api/sympton",
        method:"POST",
        data: data
    }).then(function(response){
        console.log(response)
    })
 })

 $(document).ready(function(){
    $(".sidenav").sidenav();
  });
  