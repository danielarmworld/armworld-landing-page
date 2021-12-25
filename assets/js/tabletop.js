let public_spreadsheet_url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQiLUYXC1Rv3vn8p_zP2iMToxRJKE3C25tm1nMVy4IjxbiNEfSaVkUFFZ2qKlA7OVEUJFxM9GMm0KoP/pub?output=csv'

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo,
  })
}

window.addEventListener('load', init)

function showInfo(results) {
  var data = results.data
    console.log(data)
    console.log(data[0]['Date End'])
  // data comes through as a simple array since simpleSheet is turned on
  //   alert("Successfully processed " + data.length + " rows!")
  document.getElementById('time-counter').setAttribute("data-time", `${data[0]['Date End']}`);
}
