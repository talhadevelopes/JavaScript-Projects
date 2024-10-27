var selectField = document.getElementById('selectField');
var selectText = document.getElementById('js-select-text'); 
var options = document.getElementsByClassName('options');
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');


selectField.onclick = function() {
    list.classList.toggle('js-hide');
    arrowIcon.classList.toggle('arrow-icon-rotate');
}

Array.from(options).forEach(option => {
    option.onclick = function() {
        selectText.textContent = this.textContent;
        list.classList.add('js-hide');
        arrowIcon.classList.remove('arrow-icon-rotate'); 
    }
});
