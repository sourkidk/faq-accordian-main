const faq_container = document.querySelector('.faq-container');

faq_container.addEventListener('click', function(e){
    const clickedElement = e.target;
    const question = clickedElement.closest('.question');

    if (!question) return;
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    question.setAttribute('aria-expanded', String(!isExpanded));



    const answer = question.nextElementSibling;

    if (answer) answer.classList.toggle('visible');

    const icon = question.querySelector('.plus-collapsed');
    if (icon) {
        icon.src = !isExpanded
            ? "./assets/images/icon-minus.svg"
            : "./assets/images/icon-plus.svg";
    } else {
        console.warn('Icon element not found, skipping src update');
    }

});