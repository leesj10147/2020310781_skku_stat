function sum(numbers)
{
    return numbers.reduce((a, b)=>a+b, 0);
}
function avg(numbers)
{
    return sum(numbers)/numbers.length;
}
function max(numbers)
{
    return numbers.reduce((a, b)=>(a>b?a:b), numbers[0]);
}
module.exports = 
{
    sum,
    avg,
    max,
}
