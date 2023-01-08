const options = document.querySelectorAll('.option');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const form = document.querySelector('#rating-form');
const ratingResult = document.querySelector('#rating-result');

start.classList.add('show');
end.classList.add('hide');

function addRatingResult(e) {
    ratingResult.innerText = "You selected " + e.target.value + " out of 5";
}

function addHover(e) {
    if (!e.target.classList.contains('active-choice')) {
        e.target.classList.add('hover-choice');
    }
}

function removeHover(e) {
    e.target.classList.remove('hover-choice');
}

function addActive(e) {
    const optionsDiv = e.target.parentNode.parentNode;
    const lengthChildren = optionsDiv.children.length;
    for (let i=0; i<lengthChildren; i++) {
        if (optionsDiv.children[i].children[0].checked) {
            optionsDiv.children[i].classList.remove('hover-choice');
            optionsDiv.children[i].classList.add('active-choice');
        }
    }
}

function removeActive(e) {
    const optionsDiv = e.target.parentNode.parentNode;
    const lengthChildren = optionsDiv.children.length;
    for (let i=0; i<lengthChildren; i++) {
        console.log(optionsDiv.children[i]);
        if (!(optionsDiv.children[i].children[0].checked)) {
            optionsDiv.children[i].classList.remove('active-choice');
        }
    }
}

for (let option of options) {
    option.addEventListener('click', e => {
        addRatingResult(e);
    });
    option.children[0].addEventListener('change', e => {
        addActive(e);
        removeActive(e);
    });
    option.addEventListener('mouseenter', e => {
        addHover(e);
    });
    option.addEventListener('mouseleave', e => {
        removeHover(e);
    });
}

function switchComponentClass(e) {
    e.preventDefault();
    start.classList.remove('show')
    start.classList.add('hide');
    for (let child of start.children) {
        child.classList.add('hide');
    }
    end.classList.add('show');
    end.classList.remove('hide');
}

form.addEventListener('submit', switchComponentClass);




