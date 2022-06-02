function test(e){
    console.log('yop', document.activeElement)
    document.querySelector(`button[data-dialog-id=${document.activeElement.id.replace('card-', 'edit-note-')}`).click()
    
}
document.querySelector('.project-columns-container').addEventListener('click', test)