var count=1;
function nextFunction()
{
    if(count>=1&&count<=3)
    {
    if(count==1)
    {
    let temp1=document.getElementById("line-1");
    let temp2=document.getElementById("div-2");
    temp1.classList.add("changeColor");
    temp2.classList.add('changeColor');
    count++;
    }
  else  if(count==2)
    {
       let temp1= document.getElementById('line-2');
       let temp2=document.getElementById('div-3');
       temp1.classList.add('changeColor');
       temp2.classList.add('changeColor');
       count++;

    }
}
}
function previousFunction()
{
    if(count==2)
    {
        let temp1=document.getElementById('line-1');
        let temp2=document.getElementById('div-2');
        temp1.classList.remove('changeColor');
        temp2.classList.remove('changeColor');
        count--;
    }
    else if(count==3)
    {
        let temp1=document.getElementById('line-2');
        let temp2=document.getElementById("div-3");
        temp1.classList.remove("changeColor");
        temp2.classList.remove("changeColor");
        count--;
        
    }
}