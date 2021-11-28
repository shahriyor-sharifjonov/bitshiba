// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};
headerButton.onclick = menuToggle;
window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();menuCheck();
};
function menuCheck(){
    if(menuOpened){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }
}
function openPopup(){
    console.log('hahga');
       
}
