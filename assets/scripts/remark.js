
// variant 1
// const closeRemark = () => {
//   const remark = document.querySelector('.remark');

//   remark.style.cssText = `
//     transition: height 0.5s ease;
//     height:0;
//     overflow:hidden;
//   `;
// }
// setTimeout(closeRemark, 5000);

// variant 2
const remark = document.querySelector('.remark');
let height = remark.offsetHeight;
remark.style.height = `${height}px`;

const closeRemark = () => {
  remark.style.height = `${--height}px`;
  if (height >= 0) requestAnimationFrame(closeRemark);
}


setTimeout(closeRemark, 5000)

// remark.addEventListener('click', closeRemark);