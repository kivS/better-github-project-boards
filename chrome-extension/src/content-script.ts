console.log('%c Better Github-Project-Board Extension has been loaded!', 'background: #222; color: #bada55')

function clickityClick(e: Event){
    // let's only process click events for project cards
    if(!document.activeElement.classList.contains('project-card')) return

    console.log('Better Github-Project-Board Extension has been activated!')
    // console.log('yop', document.activeElement)
   
    let edit_card_btn: HTMLElement = document.querySelector(`button[data-dialog-id=${document.activeElement.id.replace('card-', 'edit-note-')}`)
    if(edit_card_btn) edit_card_btn.click()
    
}
document.querySelector('.project-columns-container').addEventListener('click', clickityClick)