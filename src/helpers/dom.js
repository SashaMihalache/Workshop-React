export const scrollToItem = (cls) => {
    setTimeout(() => {
        const contactListElem = document.getElementsByClassName(cls)[0];
        contactListElem.scrollTop = 9999;
      }, 10);
}