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
