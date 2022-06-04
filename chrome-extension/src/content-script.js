console.log('%c Better Github-Project-Board Extension has been loaded!', 'background: #222; color: #bada55');
function clickityClick(e) {
    if (!document.activeElement.classList.contains('project-card'))
        return;
    console.log('Better Github-Project-Board Extension has been activated!');
    let edit_card_btn = document.querySelector(`button[data-dialog-id=${document.activeElement.id.replace('card-', 'edit-note-')}`);
    if (edit_card_btn)
        edit_card_btn.click();
}
document.querySelector('.project-columns-container').addEventListener('click', clickityClick);
