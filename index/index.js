document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.logo').addEventListener('click', logoClick);
});

function logoClick() {
    location.href = '../index/index.html';
}