

let ul = document.querySelector('ul');

for (let i = 1; i <= 100; i++) {


 if (i % 3 == 0 && i % 5 ==0) {
 console.log ('fizzbazz');
 ul.innerHTML  += `<li class="box box--1">fizzbazz</li>`;
 } else if (i % 3 == 0) {
 console.log('fizz')
 ul.innerHTML  += `<li class="box box--2">fizz</li>`;
 }  else if (i % 5 == 0) {
 console.log('buzz')
 ul.innerHTML  += `<li class="box box--3">buzz</li>`;
 } else {
  console.log(i);
 ul.innerHTML  += `<li class="box box--4">${i}</li> `;
 }


//     seconda soluzione

// let item = document.createElement('li');
// item.innerHTML= `${i}`;
//  item.className.add =`box ${i}`;
//  ul.append(item);

}









