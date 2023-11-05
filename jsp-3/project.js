const input = document.getElementById("numOfwords")
const container = document.querySelector('.container')


let generateWord = (n) => {
let text = "";
const  letters ="ABCDEFGHIJKLMNOPGRSTUVWXYZ";


for (let i = 0; i < n; ++i){
const random = (Math.random() * 25).toFixed(0);
text += letters[random];
}
return text;

};


const generatePara = () => {
 const numOfwords = Number(input.value);

    const para = document.createElement ('p');

let data = ' ';

for(let i = 0; i < numOfwords; ++i){
const randomNumber = (Math.random() * 15 ).toFixed(0);

data += generateWord(randomNumber);
data += '  ';

}



    para.innerText = data;

    para.setAttribute = ('class','paras');
    container.append(para);


};