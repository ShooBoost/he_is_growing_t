var body = document.body;
var girl = document.querySelector('#girlId');
var boy = document.querySelector('#boyId');
var boyOriginWidth = boy.width;
var boyWidth = boyOriginWidth;
var boyOpacity = 0;

// 如果是有觸控功能的裝置，就使用 touchmove
if (isMobile()) {
    body.addEventListener('touchmove',changeGirltouchPosition,false);
    boy.addEventListener('touchmove',boyGrow, false);
}else {
    body.addEventListener('mousemove',changeGirlPosition,false);
    boy.addEventListener('mousemove',boyGrow, false);
};

boy.addEventListener('click',boyColorful, false);
body.addEventListener('keydown', reSet, false);

// 用 mousemove 更改女孩位子
function changeGirlPosition(e){
    girl.style.left = (e.clientX + 10) + 'px';
    girl.style.top = (e.clientY + 10) + 'px';
};

// 用 touchmove 更改女孩位子
function changeGirltouchPosition(e){
    // touches 是 array，裡面記載著各個手指頭的座標
    // 第 0 根手指的 x 座標
    girl.style.left = (e.touches[0].clientX + 5) +'px';
    girl.style.top = (e.touches[0].clientY + 5) +'px';
};

// 男孩的 寬度加大 透明度加深
function boyGrow(e){
    boyWidth += 1;
    e.target.style.width = boyWidth + 'px';
    boyOpacity += 1;
    e.target.style.filter = `opacity(${boyOpacity}%)`;
    // console.log(e.target.style.filter);
};

// 更改背景顏色，輪流更改顏色
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

// 按下 esc 鍵重置畫面
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

// 偵測是否是具有觸控功能的裝置
function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false;}
};
    