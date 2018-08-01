// let x = [1,2,3,2,5,2,7,2,3,3,3,3];


// function bubleSort(x)
// {
//     let tempt;

//     for(let i= 0; i<x.length-1 ; i++)
//     {
//         for(let j=0; j<x.length ; j++)
//         {
//             if(x[j]<x[j-1])
//             {
//                 tempt = x[j];
//                 x[j] = x[j-1];
//                 x[j-1] = tempt;
//             }
//         }
//     }
//     console.log(x);
// }

// function mean(x)
// {
//     for(let i=1; i<x.length; i++)
//     {
//         x[0] = x[0]+x[i];
//     }
//     console.log(x[0]);
// }

// function median(x)
// {
//     let tempt;

//     bubleSort(x);

//     if(x.length%2 == 0)
//     {
//         tempt = (x[(x.length/2)-1]+x[x.length/2])/2;
//     }
//     else if(x.length%2 != 0)
//     {
//         tempt = (x[Math.floor(x.length/2)])/2;
//     }
//     console.log(tempt);
// }

////////////////////////////////////////////////////////////////////////

var x = [ 1,2,3,2,5,2,7,2 ]

const getMode = (arr) => 
{
    var countObj = {};

    for(let index in arr)
    {
        if(countObj[arr[index]] == undefined)
        {
            countObj[arr[index]] =1;
        }
        else
        {
            countObj[arr[index]]++;
        }
    }

    let modes =[];
    let maxCount = 0;
    let count = 0;

    for(let prop in countObj)
    {
        if(countObj[prop] > maxCount)
        {
            modes = [prop];
            maxCount = countObj[prop];
        }
        else if(countObj[prop] == maxCount)
        {
            modes.push(prop);
        }
        count++;
    }
    if(modes.length == count)
    {
        modes = [];
    }
    return modes;
}
console.log(getMode(x));