// 1번
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// 2번
// btn.addEventListener('이벤트 동작', 콜백함수);
btn.addEventListener('click', () => {
    const [r, g, b]  = getRandomNumber(0, 255); // de structure ing
    
    // const r = randomRGBArray[0];
    // const g = randomRGBArray[1];
    // const b = randomRGBArray[2];
    
    
    // 템플릿 리터럴(Backtick)
    const rgbColor = `rgba(${r}, ${g}, ${b})`;

    // 실제 값 바인딩, 매핑
    color.textContent = rgbColor; // hard coded
    // color.textContent = `(rgba` +`r + `,` + g + `,` + `b`)`;
    // console.log(typeof(`${r}, ${g}, ${b}`)); // 타입체크!!
    // console.dig(color);
    color.style.color = `rgba(${r}, ${g}, ${b})`;
    // document.querySelector('body','html').style.backgroundColor = rgbColor;
    document.body.style.backgroundColor = rgbColor;
});
   
// btn.addEventListener('mouseover', () => {
//     // 랜덤값(0 ~ 455) 추출 함수 호출
//     getRandomNumber();
// });


function getRandomNumber(min, max) { // 
    // rgb 랜덤값 추출
    let randomRGBArray = [];
    // console.log(Array.isArray(randomRGBArray)); // true ; .isArray 배열인지 확인하는 메서드

    // console.log(Math.random());
    for (let i = 0; i < 3; i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 0;
        randomRGBArray.push(randomNumber);
    } // Math.floor는 정수값을 소숫값으로 바꿔주는 로직

    return randomRGBArray;
}

/**
 * 1 ~ 3포함의 랜덤값을 얻고싶다고 할 때,
 * max ~ min이면 1, 3일 경우 2인데,
 * ma
 */

const xbx = Math.sqrt()

