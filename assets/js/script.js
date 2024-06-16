// HELLO WOLDを出力する
console.log("Java Scriptの学習をしています");
console.log(5 / 2);

let variable = "代入する値";
// 変数の内容を出力
console.log(variable);
// 変更する時let必要ない
variable = "variableをPOSSEに変更";
console.log(variable);

let hello = "こんにちは！";
console.log(hello + "POSSE4期生です");
console.log(hello + "POSSE5期生です");

// 関数を定義
const hello2 = function() {
    console.log('変数1');
    console.log('変数2');
}
// 関数を実行
hello2();


const introduce = function(){
    console.log('こんにちは！');
    console.log('POSSE太郎です');
}
introduce();


const introduce1 = function(name){
    const message = "こんにちは" + name + "です！"
    console.log(message);
}
introduce1("yamamoto");


const calculateTotalPrice = function(price, quantity) {
    const totalPrice = price * quantity;
    console.log(totalPrice);
}
calculateTotalPrice(200,3);

// if文
const number = 15;

if (number > 10) {
    console.log("大きい");
} else {
    console.log("小さい");
}


const user = "ポッセ二郎";

if (user == "ポッセ太郎") {
    console.log("正解です！！");
} else if (user == "ポッセ二郎") {
    console.log("いまいちです！！");
} else {
    console.log("不正解です！！");
}

// for文
for (let number = 5; number <= 15; number++) {
    console.log(number); 
}


// let text = document.getElementById('text').innerHTML;
// console.log(text);

// let text = document.getElementById('text');
// text.innerHTML = '更新しました';

console.log(text);


let about = document.getElementById('about').innerHTML;
console.log(about);


let section2 = document.getElementsByClassName('section2-block2');
console.log(section2[1].innerHTML);

let tittle = document.querySelector('.main_sub_tittle');
tittle.innerHTML = 'About Edited';

// var p = document.createElement('p');
// p.innerHTML = 'こんにちは';
// document.body.appendChild(p);



// ここからサイト

// ヘッダー・ボタンの要素を取得
// const header = document.getElementById("js-headerButton");
// const button = document.getElementById("js-button");

// ボタンをクリックした時の処理
// button.addEventListener("click", () => {
//   header.classList.toggle("is-open");
// });




const is_open = function () {
    const header = document.getElementById('header')
    header.classList.toggle("is_open");
}

const btn = document.getElementById('js-headerButton');
btn.addEventListener('click', is_open);

