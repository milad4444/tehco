$(document).ready(function () {
  $('.tab ').click(function () {
    // Remove 'active' class from all tabs and tab panes
    $('.tab').removeClass('active-tab')
    $('.tab-pane').removeClass('active-pane')

    // Add 'active' class to the clicked tab and corresponding tab pane
    $(this).addClass('active-tab')
    var activeTab = $(this).index()
    $('.tab-pane').eq(activeTab).addClass('active-pane')
  })
})
// Get the button
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
