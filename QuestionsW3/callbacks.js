// // function getData(dataId,getnextData){

// //     setTimeout(()=>{
// //         console.log("data",dataId);
// //         if(getnextData){
// //             getnextData();
// //         }
// //     },2000);
// // }

// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3,()=>{
// //             getData(4,()=>{
// //                 getData(5);
// //             });
// //         });
// //     })
// // })

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         // resolve("Executed");
//         reject("error");
//     });
// };

// let promise=getPromise();
// promise.then(()=>{
//     console.log("Promise Fulfilled");
// })

// promise.catch(()=>{
//     console.log("Rejected");
// })

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
function asyncFucn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data1 .....");
asyncFunc1().then((res)=>{
    console.log("fetching data2 .....");
    asyncFucn2().then((res)=>{})
})