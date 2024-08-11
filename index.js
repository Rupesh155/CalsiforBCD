
// console.log(a);
// var a=20


// console.log(a);
// let a=20
// let a
// console.log(a);
// a=5


// console.log(b);
// let b=40


// let c
// console.log(c);
// c=20


// add()
// function add(){
//     console.log('hey!');
// }
// add()
// let add=()=>{
//     console.log('hey!! idher dekhoo');

// }
// let arr=[1,2,3,4,5,6,6,6]

// let kyaaayega= arr.find((a)=>{
//     return a==6
// })
// console.log(kyaaayega);


// let sum=   arr.reduce((a,b,c,d)=>{
//     return a+b

// })
// console.log(sum);
//   let filteredddvalueee=  arr.filter((a,b,c)=>{
//     return a>4

// })
// console.log(filteredddvalueee);
//  let newA= arr.map((a,b,c)=>{
//     // console.log(a);
//     return a
    
// })
// console.log(newA);
// let newA=   arr.forEach((a,b,c)=>{
//     // console.log(c);
//     return a
// })
// console.log(newA);


// array.forEach(element => {
    
// });

// for(let i in arr){
//     console.log(i);
// }
// for(let i of arr){
//     console.log(i);
// }


// function step1(fn){
//     console.log(fn,'hehehe');
//     setTimeout(()=>{
//         console.log('photo selectedddd');
//         fn()
//     },5000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log('filtreddddddd');
//         fn()
//     },5000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log('captionssssssss ');
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('postt ho gyiiiiiii');
//     },2000)

// }

// Promise



//  let promise=   new Promise((res, rej)=>{
//     let reason='barish'
//     if(reason==='barish'){
//         rej('errr')
//     }
//     else{
//         res('resolve')
//     }

// })
// promise.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


// console.log(promise,"hellooo");









// step1( ()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })





// step3()
// step4()
// step1()
// step2()





// let step1=   function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
            
//             res('photo select ho gyii')

//         },4000)

//     })

// }

// let step2=   function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('filtrereddddddddd')

//         },4000)
//     })

// }


//   async function kalajadu(){
// let data=  await  step1()
//     console.log(data);
//     console.log('hello');
//    let data1=   await  step2()
//    console.log('hiii');
//    console.log(data1);
// }
// kalajadu()







// step1().then((data)=>{
//     console.log(data);
//     return step2().
//     then((filtreeddd)=>{
//         console.log(filtreeddd);
        

//     })

// })

//  async function magic(){
//    let data=  await step1()
//    console.log(data);
//   let data1=   await step2()
//   console.log(data1);

// }
// magic()


// Dom


// console.log('hello');
// // console.log(kyaayega);
// console.log(document);
//   let btn= document.querySelectorAll('h1')
// for(let i of btn){
//     i.style.color='red'
// }

//   btn.style.color='red'
//  let btn=   document.getElementsByClassName('two')
//  let btn=  document.querySelectorAll('button')
//  console.log(btn);
  
// setTimeout(()=>{
//     console.log('one');

// },1000)
  
// setTimeout(()=>{
//     console.log('three');

// },0)

// console.log('two');



// function step1(fn){
//     setTimeout(()=>{
//         console.log('photo select ho gyii hehehe');
//         console.log(fn,"aao dekh letehia");
//         fn()


//     },5000)

// }
// function step2(fn){
//     setTimeout(()=>{
   
//         console.log('filterredddd imageeeeee hehehe');
        
//         fn()

//     },4000)

// }

// function step3(){
//     setTimeout(()=>{
//         console.log('captionsssssss hehehe');

//     },3000)

// }
// function step4(){
//     setTimeout(()=>{
//         console.log('posttttttt hehehe');

//     },2000)

// }
// callback hell
// step1( ()=>{
//     step2( ()=>{
//         step3()
//     } )
// } )
       
//    let promise=     new Promise((res,rej)=>{
//                let barish=false
//                if(barish){
//                 rej()
//                }
//                else{
//                 res()
//                }
//                 //    res()
//                 // rej()

//        })
    //    promise.then(()=>{
    //     console.log('class aana hai ');

    //    }).catch(()=>{
    //     console.log('class nhi aa paunga barish ho rhiiii');
    //    })
    //    console.log(promise,"hehehe")


    // let step2=function(){
    //     return new Promise((res,rej)=>{
    //         // console.log('pho');
    //         setTimeout(()=>{
    //             console.log('filtreddddddd');
    //             res()
    //         },4000)

    //     })

    // }


    // async function  kalajadu(){
    //  await  step1()
  
    //    await  step2()

    // }
    // console.log(kalajadu());

    // step1().then(()=>{
    //     return step2().then(()=>{

    //     })
    // })

    //  let a=   document.querySelector('a')
    //  a.setAttribute('href','http://amezon.com')
    //  console.log(a.getAttribute('href'));
    //  console.log(a.getAttribute('href'));

    // const arr = [
    //     'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    //     'https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    //     'https://plus.unsplash.com/premium_photo-1718204439001-c1946b9039ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     'https://images.unsplash.com/photo-1722353619595-b4761dce43c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    //   ]
      
    //   const imageEl = document.querySelector('img');
    //   imageEl.style.height='200px'
      
    //   let num = 0;
      
    //   setInterval(function() {
    //     imageEl.setAttribute('src', arr[num]);
    //     num = (num + 1) % arr.length;
    //   }, 2000);



    // let div=  document.querySelector('div')
    // let p=     document.createElement('h1')
  //   let h5=   document.createElement('h5')
  //  let id=  document.createAttribute('class')
  //  id.value='hello'
  //  h5.setAttributeNode(id)
    // h5.innerText='hey!'
    // p.innerText='helloo'

    // div.append(p,h5)
    // p.remove()

    // console.log(div);]

    // function fun1(){
    //   console.log('hey!!!!!');
    // }

  //  let btn=   document.querySelector('button')


// 3rd
  //  btn.addEventListener('click',function(){
  //   console.log('chin tapak dam dam');

  //  })
  //  2nd
  //  btn.onclick=function(){
  //   console.log('hey!!!!');
  //  }

//  let div=   document.querySelector('div')
//  let inp=   document.querySelector('input')
//  inp.addEventListener('input',(e)=>{
//   // console.log('hey!!!!!');
//   console.log(e.target.value);
//   div.innerText=e.target.value

//  })
//   let inp=   document.querySelector('input')
//  let form=  document.querySelector('form')
//  form.addEventListener('submit',(e)=>{
//   e.preventDefault()

//   // console.log('nhi dik');
//   console.log(inp.value);


//  })



//   let div=  document.querySelector('div')

// let h1=   document.createElement('h1')
// let p=  document.createElement('p')
// h1.innerText='hello'
// div.append(h1,p)
// function fun1(){
//   console.log('heheheh');
// }
// let btn=  document.querySelector('#btn')
// btn.onclick=function(){
//   console.log('ehehe');

// }
//   let btn=  document.querySelector('button')
//  let inp=   document.querySelector('input')
// let ul=  document.querySelector('ul')

// btn.addEventListener('click',()=>{
//   // console.log('heyyeey');
//  let data=  inp.value
// //  console.log(data,"dekhooo");

// let li=   document.createElement('li')
// li.innerText=data
// ul.appendChild(li)        
// inp.value=''
// li.addEventListener('click',()=>{    
//   li.remove()
// })

// })


let button=  document.querySelectorAll('button')
let inp=  document.querySelector('input')

for(let btn of button)
{
  btn.addEventListener('click',(e)=>{
    // console.log('hey');
   let text=   e.target.innerText
   console.log(text);
   if(text==='C'){
    inp.value=''
   }
   else if(text==='='){
  inp.value=   eval(inp.value)
   }
   else{
    inp.value=inp.value+text

   }
 
    
  })
}









































































