function add(n1:number,n2:number, showresult: boolean,phrase: string)
{
    const result=n1+n2;
    if(showresult)
    {
        console.log(phrase + result); 
    }
    else{
        return result;
    }
}
 const number1=5;
 const number2=3.1;
 const printresult=true;
 const resultphase='result  is';
  
 //const result=
 add(number1,number2,printresult,resultphase);
 //console.log(result);