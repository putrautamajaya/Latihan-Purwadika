let x = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1];

for(let i= 0; i<x.length-1 ; i++)
{
    for(let j=0; j<x.length ; j++)
    {
        if(x[j]<x[j-1])
        {
            let tempt = x[j];
            x[j] = x[j-1];
            x[j-1] = tempt;
        }
    }
}

console.log(x);