const mesh = document.querySelector('#mesh');
const btn = document.querySelector('#btn');
const back = document.querySelector('#back');
const pick = document.querySelector('#pick');
let temp = Math.floor(Math.random() * 30 + 6);
let item;
let set = 0;
let toggle = 0;
let check = 0;
let cnt = 0;

const play = () => {
    let meshList = [];
    let i = 0;
    if(set === 0) {
        while (i <= temp) {
            mesh.insertAdjacentHTML('afterbegin', `<div class="tile" id="tile${i}"></div>`);
            item = document.querySelector(`#tile${i}`);
            meshList.push(item);
            i ++;
        }
        window.alert('先手の番です');
    }
    // console.log(meshList);
    set ++;
    return meshList;
}
const meshList = play();
const change = () => {
    if(toggle === 0 && cnt <= 2) {
        // meshList[temp].classList.remove('green');
        meshList[temp].classList.add('black');
        document.querySelector(`#tile${temp}`).value = 0;
        if (meshList[0].value === 0) {
            window.alert('後手の勝ち！');
            btn.disabled = true;
            back.disabled = true;
            pick.disabled = true;
        }
        cnt += 1;
        temp -= 1;
        console.log(toggle);
    } else if(toggle === 1 && cnt <= 2) {
        // meshList[temp].classList.remove('black');
        meshList[temp].classList.add('green');
        document.querySelector(`#tile${temp}`).value = 1;
        if (meshList[0].value === 1) {
            window.alert('先手の勝ち！');
            btn.disabled = true;
            back.disabled = true;
            pick.disabled = true;
        }
        cnt += 1;
        temp -= 1;
        console.log(toggle);
    }
}
// console.log(meshList);
window.addEventListener('load', play);
pick.addEventListener('click', change);
btn.addEventListener('click', () => {
    if(toggle === 0) {
        cnt = 0;
        toggle += 1;
        window.alert('後手の番です');
        console.log('テスト');
    } else {
        cnt = 0;
        toggle -= 1;
        window.alert('先手の番です');
        console.log('テスト');
    }
})
back.addEventListener('click', () => {
    if(toggle === 0 && temp < meshList.length && cnt > 0) {
        temp += 1;
        meshList[temp].classList.remove('black');
        console.log(cnt);
        cnt -= 1;
    } else if(toggle === 1 && temp < meshList.length && cnt > 0){
        temp += 1;
        meshList[temp].classList.remove('green');
        cnt -= 1;
        console.log(cnt);
    }
})