$('document').ready(function(){
    console.log('Lets get ready to party with jQuery!')
})

$('img').addClass('image-center')

$('p').eq(-1).remove();

$('#title').css('fontSize', function(){
    const rand = Math.random() * (100 - 1) + 1;
    return `${rand}px`;
})

$('<li>Whetever you want</li>').appendTo('ol');

$('li').remove();

$('<p> This is a paragraph apologzing for the existence of a silly list inside of this document</p>').appendTo('ol')

$('body').css('background-color', function(){
    const red = $('input.form-control').eq(0).val()
    const green = $('input.form-control').eq(1).val()
    const blue = $('input.form-control').eq(2).val()
    return "rgb(" + red + "," + green + "," + blue + ")";

})

$('img').on('click', function(){
    $(this).remove();
})
