function popUpLinks() {
  let popup = document.getElementById('popUpLinks')
  let sharebtn = document.querySelector('.share-btn')
  let innerShareBtn = document.querySelector('.inner-share-btn')
  sharebtn.classList.toggle('active')
  innerShareBtn.classList.toggle('active')
  popup.classList.toggle('active')
}