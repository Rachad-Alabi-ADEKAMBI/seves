document.addEventListener('DOMContentLoaded', function() {
    const detailButton = document.getElementById('detail-btn');
    const detailElement = document.querySelector('.fiche-detail');
    const syntheseButton = document.getElementById('synthese-btn');
    const syntheseElement = document.querySelector('.fiche-synthese');
    const hiddenClass = 'hidden';

    function toggleElementVisibility(elementToShow, elementToHide) {
        elementToShow.classList.remove(hiddenClass);
        elementToHide.classList.add(hiddenClass);
    }

    detailButton.addEventListener('click', function() {
        toggleElementVisibility(detailElement, syntheseElement);
    });

    syntheseButton.addEventListener('click', function() {
        toggleElementVisibility(syntheseElement, detailElement);
    });

	// Afficher l'élément de détail par défaut
    detailElement.classList.remove(hiddenClass);
    syntheseElement.classList.add(hiddenClass);

    if(window.location.hash && window.location.hash === "#documents") {
        document.getElementById("tabpanel-404").setAttribute("aria-selected", false);
        document.getElementById("tabpanel-405").setAttribute("aria-selected", false);
        document.getElementById("tabpanel-406").setAttribute("aria-selected", true);

    }
});
