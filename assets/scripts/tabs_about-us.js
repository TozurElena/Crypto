const advantageButtons = document.querySelectorAll('.advantage__btn');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageButtons.forEach((advantageButton, i) => {
  advantageButton.addEventListener('click', () => {
    advantageItemsContent.forEach((advantageItemContent, j) => {
      if (i === j) {
        advantageButtons[i].classList.add('advantage__btn_active');
        advantageItemsContent[j].classList.add('advantage__item-content_active')
      } else {
        advantageButtons[i].classList.remove('advantage__btn_active');
        advantageItemsContent[j].classList.remove('advantage__item-content_active')
      }
    })
  })
})
