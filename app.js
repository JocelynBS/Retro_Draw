/*for (let i = 0; i < 64; i++) {
    let newDiv = $('<div class = "cell">')
    $('.grid').append(newDiv);

}
const palette = [
    'red',
    'blue',
    'purple',
    'green'
]

for (let i = 0; i < palette.length; i++) {
    const nextColor = palette[i]
    const button = $('<button>')
        .css('backgroundColor', nextColor);
    $('.palette').append(button);
}*/

const PALETTE = [
    'red',
    'blue',
    'purple',
    'green',
    'pink',
    'black',
    'white',
    'yellow',
    'orange'
];

function makePalette() {
    const nextColor = $('.palette');

    for (let i = 0; i < PALETTE.length; i++) {
        const button = $('<button>');
        button.css('backgroundColor', PALETTE[i]);
        nextColor.append(button);
    }
    $('.palette button').first().addClass('active');
}
makePalette();

function makeGrid() {
    const grid1 = $('.grid');
    for (let i = 0; i < 64; i++) {
        let cell = $('<div class="cell"></div>');
        grid1.append(cell);
    }
}
makeGrid();


function onPaletteClick() {
    $('.palette .active').removeClass('active');
    $(this).addClass('active');
}
$('.palette button').click(onPaletteClick)


function onGridClick() {
    const current = $('.palette .active').css('background-color');
    let gridColor = $(this).css('background-color');
    if (gridColor == current) {
        $(this).css('background-color', '');
    } else {
        $(this).css('background-color', current);
    }
}
$('.grid .cell').click(onGridClick);


function onClearClick() {
    $('.grid .cell').css('backgroundColor', '');
}
$('.controls .clear').click(onClearClick);


function onFillAllClick() {
    let current = $('.palette .active').css('backgroundColor');
    $('.cell').css('backgroundColor', current);
}
$('.fill-all').click(onFillAllClick)


function onFillEmptyClick() {
    let current = $('.palette .active').css('backgroundColor');
    let cells = $('.cell');

    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];

        console.log($(cell).css('background-color'))

        if ($(cell).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
            $(cell).css('backgroundColor', current);
        }
    }
}
$('.fill-empty').click(onFillEmptyClick);


