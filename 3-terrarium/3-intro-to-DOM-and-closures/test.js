

function displayCandy(){
    let candy = ['jellybeans'];
    console.log(candy);
    function addCandy(candyType) {
        candy.push(candyType)
    }
    addCandy('gumdrops');
    console.log(candy)
}
displayCandy();

