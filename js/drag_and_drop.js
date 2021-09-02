const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');



imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';

    //when we give 0 to setTimeout function it will run at last
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {

    e.target.className = 'imgBox';

});

for (let whiteBox of whiteBoxes) {
    // console.log(whiteBoxes[index], index)
    whiteBox.addEventListener('dragover', (e) => {

        e.preventDefault();

    });

    whiteBox.addEventListener('dragenter', (e) => {

        e.target.className += ' dashed';

    });

    whiteBox.addEventListener('dragleave', (e) => {

        e.target.className = ' whiteBox';

    });

    whiteBox.addEventListener('drop', (e) => {

        e.target.append(imgBox);

    });


}