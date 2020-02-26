let n = prompt("nhap n: ");
let str =n.toString(); //ep kieu n ve string;
let result =  [str[0]]; //khai bao bien result = 1 mang co phan tu string voi index=0;
for(let i=1; i<str.length; i++)
{
    if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
    {
        result.push('-', str[i]);
    }
    else
    {
        result.push(str[i]);
    }
}
document.write(result.join(''));
