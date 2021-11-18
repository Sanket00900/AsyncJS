let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


 
// CALLBACK HELL --------------------------------------------------------------------------


// let order = (Fruit_name,call_production) => {
//    setTimeout(() => {
//        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
       
//        call_production()
       
//    },2000);
 
// };

// let production = () => {
//    setTimeout(() => {
//        console.log("production has started");
       
//        setTimeout(() => {
//            console.log("the fruit has been chopped");
//            setTimeout(() => {
//                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                setTimeout(() => {
//                    console.log("the machine was started");
//                    setTimeout(() => {
//                        console.log(`ice cream was placed on ${stocks.holder[0]}`);
//                        setTimeout(() => {
//                            console.log(`${stocks.toppings[0]} was added as toppings`);
//                            setTimeout(() => {
//                                console.log("serve ice cream");
//                            }, 2000);
//                        }, 3000);
//                    }, 2000);
//                }, 1000);
//            }, 1000);
//        },2000)
//    },0000);
// };
    
// order(3, production);

//------------------------------------------------------------------------------------------




// PROMISES --------------------------------------------------------------------------------

//Basic Syntax/f;low :-

    /*
let order = (a,b) => {
    return new Promise((resolve, reject) => {
        if () {
            resolve()
        } else {
            reject()
        }
    } )
}
order(a, b)
    .then()
    .then()
    .then()
    .then()
    .catch()
    .finally()

    */


    // --------------------------------------------------------------------

// let is_shop_open = true;

// let order = (time, work) => {
    
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time);
//         } else {
//             reject(console.log("Our shop is closed"))
//         }
//     });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//     .then(() => {
//         return order(0000, () => console.log("Production has started"))
//     })

//     .then(() => {
//         return order(2000, () => console.log("the fruit was chopped"))
//     })

//     .then(() => {
//         return order(1000, () => {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//         })
//     })

//     .then(() => {
//         return order(1000, () => console.log("the machine was started"));
//     })

//     .then(() => {
//         return order(2000, () => {
//             console.log(`ice cream was placed on ${stocks.holder[0]}`)
//         });
//     })

//     .then(() => {
//         return order(3000, () => {
//             console.log(`${stocks.toppings[0]} was selected`)
//         })
//     })

//     .then(() => {
//         return order(1000, () => {
//             console.log("ice cream served")
//         })
//     })


//     .catch(() => {
//     console.log("Customer Left")
// })

//     .finally(() => {
//         console.log("day ended, shop is closed")
//     })


// -------------------------------------------------------------------------------------------



// ASYNC AWAIT -------------------------------------------------------------------------------

// Basic Syntax/Flow :- 

/*
async function order() {
    try { }
    catch (error) { }
    finally{}
}

*/

// --------------------------------------------------------------------------------


let is_shop_open = true;


function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("shop is closed"))
        }
                  
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[1]} was selected`)
        
        await time(0000)
        console.log("production started")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream was places on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(1000)
        console.log(`serve ice cream`)


    }

    catch (error) {
        console.log("customer left")
    }
    finally {
        console.log("day ended , shop is closed")
    }
}

kitchen()

 // -------------------------------------------------------------------------------------------







