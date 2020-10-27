let subMobile = document.querySelector('.sub_mobile')

document.querySelector('.burger').addEventListener('click', () => {
    if (subMobile.style.display === "none") {
        subMobile.style.display = "block"
    } else {
        subMobile.style.display = "none"
    }
})