let clickedCard = null;

function onCardClicked(e) {
  const target = e.currentTarget;

  if(target === clickedCard ||
    target.className.includes('done')) {
      return;
  }
  target.className = target.className
  .replace("color-hidden", "")
  .trim();
  target.className += 'done';
  

  if (!clickedCard) {
    //if we haven't clicked matched a card , keep track of it
    clickedCard = target;
  } else if (clickedCard) {
    if (
      clickedCard.getAttribute("data-color") ===
      target.getAttribute("data-color")
    ) {
        
    //   clickedCard.className += "done";
    //   target.className += "done";
    }else {
        console.log('cards not equal');
        setTimeout(() => {
        clickedCard.className.replace('done', '').trim();
        target.className.replace('done', '').trim();    
        }, 500);
    }
  }
}

// if we have clicked on a card and it matches with another card, display
