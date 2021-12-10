$(document).ready(function(){
  $('#content-module-pm').hide()
  
  $('#btn-pm').click(function(){
    $('#content-module-pm').show()
    $('#choose-module').hide()
  })

  $('#back-pm').click(function(){
    $('#content-module-pm').hide()
    $('#choose-module').show()
  })
});