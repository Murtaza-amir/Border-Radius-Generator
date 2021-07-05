hljs.highlightAll();
const borderBox = document.getElementById('borderBox'),
    topLeft = document.getElementById('topLeft'),
    topRight = document.getElementById('topRight'),
    bottomLeft = document.getElementById('bottomLeft'),
    bottomRight = document.getElementById('bottomRight');


topLeft.onchange = function () {
    borderBox.style.borderTopLeftRadius = this.value + 'px';
    borderRadiusCode.innerText = borderBox.getAttribute('style');
    hljs.highlightAll();
}

topRight.onchange = function () {
    borderBox.style.borderTopRightRadius = this.value + 'px';
    borderRadiusCode.innerText = borderBox.getAttribute('style');
    hljs.highlightAll();
}

bottomLeft.onchange = function () {
    borderBox.style.borderBottomLeftRadius = this.value + 'px';
    borderRadiusCode.innerText = borderBox.getAttribute('style');
    hljs.highlightAll();
}

bottomRight.onchange = function () {
    borderBox.style.borderBottomRightRadius = this.value + 'px';
    borderRadiusCode.innerText = borderBox.getAttribute('style');
    hljs.highlightAll();
}

// Copy Code
$(document).on("click", "#copy", function () {
    copyToClipboard($('#borderRadiusCode'));
    document.getElementById('dialog').classList.add('show');
    setTimeout(() => {
        document.getElementById('dialog').classList.remove('show');
    }, 1500);

});
// Copy Code End
// Copy to Clip board
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
// Copy to Clip board End



let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    body.classList.add('dark-theme');
}

toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('currentTheme', 'themeAvtive');
    } else {
        localStorage.removeItem('currentTheme');
    }

})