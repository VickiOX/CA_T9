const titleBox = document.querySelector(".title_box");
const dropDown = document.querySelector(".drop_down_box");

titleBox.addEventListener("click", () => {
  titleBox.classList.toggle("active");
  dropDown.classList.toggle("active");
});
