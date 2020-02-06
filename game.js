let clickedCard = null;
let preventClick = false;

function onCardClicked(e) {
  const target = e.currentTarget;
  if( preventClick ||
    target=== clickedCard ||
    target.className.includes('done')){
          return;
      }
  target.className = target.className
  .replace('color-hidden', '')
  .trim();
  
//   if( target === clickCard ||
  


  //if we haven't clicked a card, keep track of the card, display it's color
  if (!clickedCard) {
    clickedCard =target;
    
  } else if (clickedCard) {
  
  //if we have already clicked on a card, check if the new card matches the old card color
  preventClick = false;
  if (
    clickedCard.getAttribute('data-color') !== 
    target.getAttribute('data-color')) 
       {
      console.log('cards not equal');
    setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('done', '').trim() + 'color-hidden';
        target.className.replace('done', '').trim() + 'color-hidden';
        clickedCard = null;
        preventClick = false;
    }, 500); 
}else{
    clickedCard = null;
}
}
}
