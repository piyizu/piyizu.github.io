// Display "BackToTop" when the scroll bar is not at the top, otherwise hide it.
window.onscroll = function() {
    let backtotop_link = document.getElementById("li_back_to_top");
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      backtotop_link.style.display = "block";
    }
    else {
      backtotop_link.style.display = "none";
    }
  }