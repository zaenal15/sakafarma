$(document).ready(function(){
  // hide section
  $('#content-module-pm, #location-pm, #unit-pm, #pm-table, .nav-location-pm, .nav-unit-pm, .nav-table-unit-pm, #row-popup-unit-pm').hide()
  
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
    $('#choose-module, #unit-pm, #pm-table').hide()
    // show nav
    $('.row-nav-subhead, .nav-location-pm').show()
    // hide nav
    $('.nav-unit-pm, .nav-table-unit-pm').hide()
  })
  
  $('.card-content-location, .nav-unit-pm').click(function(){
    //show section
    $('#content-module-pm, #unit-pm').show()
    // hide section
    $('#choose-module, #location-pm, #pm-table').hide()
    // show nav
    $('.row-nav-subhead, .nav-location-pm, .nav-unit-pm ').show()
    // hide nav
    $('.nav-table-unit-pm').hide()
  })

  $('.content-unit-pm, .nav-table-unit-pm').click(function(){
    //show section
    $('#content-module-pm, #pm-table').show()
    // hide section
    $('#choose-module, #location-pm, #unit-pm').hide()
    // show nav
    $('.row-nav-subhead, .nav-location-pm, .nav-unit-pm, .nav-table-unit-pm ').show()
  })
  
  //popup show hide
  $('.poup-list-pm').click(function(){
    //show section
    $('#row-popup-unit-pm').show()
    
    $('.btn-close-popup').click(function(){
      $('#row-popup-unit-pm').hide()
    })
  })
});