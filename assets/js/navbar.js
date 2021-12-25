window.onscroll = function () {
  growShrinkLogo()
}

function growShrinkLogo() {
  var Logo = document.getElementById('logo')
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '50px'
    Logo.style.height = '50px'
  } else {
    Logo.style.width = '100px'
    Logo.style.height = '100px'
  }
}
