$(document).ready(function(){
  // hide section
  $('#content-module-pm, #location-pm, #unit-pm,.nav-location-pm, .nav-unit-pm').hide()
  
  // back choose module
  $('#back-pm').click(function(){
    $('#content-module-pm, .row-nav-subhead, #location-pm, #unit-pm').hide()
    $('#choose-module').show()
  })

  // show content section
  $('#btn-pm, .nav-location-pm').click(function(){
    //show section
    $('#content-module-pm, #location-pm').show()
    // hide section
    $('#choose-module, #unit-pm').hide()
    // show nav
    $('.row-nav-subhead, .nav-location-pm').show()
    // hide nav
    $('.nav-unit-pm').hide()
  })

  $('.card-content-location, .nav-unit-pm').click(function(){
    //show section
    $('#content-module-pm, #unit-pm').show()
    // hide section
    $('#choose-module, #location-pm').hide()
    // show nav
    $('.row-nav-subhead, .nav-location-pm, .nav-unit-pm ').show()
  })

});