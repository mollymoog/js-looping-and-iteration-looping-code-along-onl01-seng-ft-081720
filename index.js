
function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}


function countDown(i) {
    while ( 0 <= i ) {
        console.log(i);
        i -= 1;
    }
}