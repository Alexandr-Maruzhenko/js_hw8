let html = document.querySelector('html'); // нашёл элемент HTML"
html.setAttribute('lang', 'ru'); // добавил lang="ru"

let meta1 = document.createElement('meta'); // создал элемент META
meta1.setAttribute('charset', 'UTF-8'); // добавил charset="UTF-8"

let meta2 = document.createElement('meta'); // создал второй элемент META
meta2.setAttribute('name', 'viewport'); // добавил name="viewport"
meta2.setAttribute('content', 'width=device-width, initial-scale=1.0'); // добавил content="width=device-width, initial-scale=1.0"

let title = document.createElement('title'); // создал элемент TITLE
title.innerHTML = 'js_hw_7_Maruzhenko'; // добавил текст в элемент TITLE

document.head.appendChild(meta1); // вставил первый META в HEAD
document.head.appendChild(meta2); // вставил второй META в HEAD
document.head.appendChild(title); // вставил второй TITLE в HEAD

// let script = document.head.querySelector('script[src="js/scripts.js"]'); // нашёл элемент SCRIPT с атрибутом src="js/scripts.js"
// document.head.appendChild(script); // переместил элемент SCRIPT в конец раздела HEAD (я художник, я так вижу)

let style = document.createElement('style'); // создал раздел STYLE
style.innerHTML = `*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
}
.widget {
    margin: 60px auto;
    width:940px;
    height: 430px;
    /*border: 1px solid;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: rgb(255, 255, 255);
}

.item{
    width: 220px;
    height: 410px;
    /*border: 1px solid;*/
    text-align: center;
    background-color: rgb(255, 255, 255);
    /*vertical-align: top;*/
    margin: 10px 20px 10px 0;

}

.last{
    margin-right: 0;
}

.widget-header{
    width: 220px;
    height: 62px;
    font-size: 16px;
    font-family: "OpenSans";
    color:rgb(164, 174, 185);
    background-color: rgb(246, 248, 250);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 62px;
    position: relative;
    border-top-left-radius:7px;
    border-top-right-radius:7px;
}

.widget-header-red{
    color: rgb(255, 255, 255);
    background-color: rgb(218, 68, 83);
}

.widget-subheader{
    width: 220px;
    height: 46px;
    background-color: rgb(227, 228, 232);
    font-size: 22px;
    font-family: "Economica";
    color: rgb(164, 174, 185);
    font-weight: bold;
    line-height: 46px;
}

.widget-subheader-red{
    color: rgb(255, 255, 255);
    background-color: rgb(237, 85, 101);
}

.widget-text{
    width: 220px;
    height: 252px;
    background-color: rgb(255, 255, 255);
    font-size: 13px;
    font-family: "Arial";
    color: rgb(164, 174, 185);
    padding-top: 10px;
    line-height: 25pt;
    text-align: center;
}

div span{
    font-weight: 800;
    background-color: rgb(255, 255, 255);
    color: rgb(164, 174, 185);
}

.button{
    width: 220px;
    height: 50px;
    font-size: 16px;
    font-family: "OpenSans";
    color: rgb(164, 174, 185);
    background-color: rgb(246, 248, 250);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 50px;
    border-bottom-left-radius:7px;
    border-bottom-right-radius:7px;
    box-shadow: 0 3px 3px #e3e4e8;
    letter-spacing:2px;
}

.button-red{
    color: rgb(255, 255, 255);
    background-color: rgb(237, 85, 101);
    box-shadow: 0 3px 3px #da4453;
}

@font-face {
    font-family: "OpenSans";
    src: url("../fonts/OpenSans-VariableFont_wdth,wght.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
}

@font-face {
    font-family: "Economica";
    src: url("../fonts/Economica-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
}
`
document.head.appendChild(style); // вставил STYLE в HEAD

let div_widget = document.createElement('div'); // создал главный div
div_widget.classList.add('widget'); // добавил класс .widget
document.body.appendChild(div_widget); // вставил главный DIV в BODY

let div_item = document.createElement('div'); // создал вложенный div
div_item.classList.add('item'); // добавил класс .item
div_widget.appendChild(div_item); // добавил вложенный DIV в главный DIV

let script = document.body.querySelector('script[src="js/scripts.js"]'); // нашёл элемент SCRIPT с атрибутом src="js/scripts.js"
document.body.appendChild(script); // переместил элемент SCRIPT в конец раздела BODY (я художник, я так вижу)
