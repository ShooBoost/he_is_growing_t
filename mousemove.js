var body = document.body;
var girl = document.querySelector('#girlId');
var boy = document.querySelector('#boyId');
var boyOriginWidth = boy.width;
var boyWidth = boyOriginWidth;
var boyOpacity = 0;

body.addEventListener('mousemove',changeGirlPosition,false);
boy.addEventListener('mousemove',boyGrow, false);
boy.addEventListener('click',boyColorful, false);
body.addEventListener('keydown', reSet, false);

function changeGirlPosition(e){
    girl.style.left = (e.clientX + 10) + 'px';
    girl.style.top = (e.clientY + 10) + 'px';
};

function boyGrow(e){
    // console.log(e.target.width);
    boyWidth += 1;
    e.target.style.width = boyWidth + 'px';
    boyOpacity += 1;
    e.target.style.filter = `opacity(${boyOpacity}%)`;

    // console.log(e.target.style.filter);
};
var nowBgColor = '';
function boyColorful(){
    switch (nowBgColor){
        case 'pink':
            nowBgColor = 'orange';
            break
        case 'orange':
            nowBgColor = 'yellowgreen';
            break
        case 'yellowgreen':
            nowBgColor = 'skyblue';
            break
        case 'skyblue':
            nowBgColor = 'pink';
            break
        default:
            nowBgColor = 'pink';
    }
    body.style.background = nowBgColor;
};

function reSet(e){
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 27:
            console.log('esc');
            boyWidth = boyOriginWidth;
            boyOpacity = 0;
            boy.style.width = boyWidth + 'px';
            boy.style.filter = `opacity(${boyOpacity}%)`;
            body.style.background = 'white';

            break
        default:
            break
    };
};