// let x = 20;

// function fizzbuzz(arr)
// {
//     for(let i = 1 ; i<arr ; i++)
//     {
//         if(i%3 == 0 && i%5 == 0)
//         {
//             console.log('fizzbuzz');
//         }
//         else if(i % 5 == 0)
//         {
//             console.log('buzz');
//         }
//         else if(i % 3 == 0)
//         {
//             console.log('fizz');
//         }
//         console.log(i);
//     }
// }

// fizzbuzz(x);

////////////////////////////////////////////////////////////////////////////////
// let tempt = [1];

// function fibo(x)
// {
//     for(let i = 0 ; i<x ; i++)
//     {
        

//         if(i == 0)
//         {
//             tempt.push(tempt[0]);
//         }
//         else if(i > 1)
//         {
//             tempt.push(tempt[i-1]+tempt[i-2])
//         }
        
//     }
//     console.log(tempt);
//     console.log(tempt[x-1]);
// }

// fibo(6);

////////////////////////////////////////////////////////////////////////////////

// function fibo(x)
// {
//     let tempt = [];
//     for(let i = 0 ; i<x ; i++)
//     {
//         if(tempt.length == 0)
//         {
//             tempt.push(i+1);
//         }
//         else if(tempt.length == 1)
//         {
//             tempt.push(tempt[0]);
//         }
//         else
//         {
//             tempt.push(tempt[i-1]+tempt[i-2])
//         }   
//     }
//     console.log(tempt);
//     console.log(tempt[x-1]);
    
// }

// fibo(6);

////////////////////////////////////////////////////////////////////////////////

// let x = [1,2,3,4,5,6,7,8];

// function reverseArray(arr)
// {
//     let tempt;

//     for(let i = 0 ; i<Math.floor(arr.length/2) ; i++)
//     {
//         tempt = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = tempt;     
//     }
//     return arr;
// }

// console.log(reverseArray(x));

let x = [1,2,3,4,5,6,7,8];

function reverseArray(arr)
{
    let tempt;

    for(let i = 0, j = arr.length-1 ; i<Math.floor(arr.length/2) ; i++, j--)
    {
        tempt = arr[i];
        arr[i] = arr[j];
        arr[j] = tempt;     
    }
    return arr;
}

console.log(reverseArray(x));

////////////////////////////////////////////////////////////////////////////////