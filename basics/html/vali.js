function myFunction() 
    {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") 
      {
        x.className += " responsive";
      } else 
      {
        x.className = "topnav";
      }
    }
document.getElementById('i4').value = Date();
function validateForm()
{   
    var a = document.getElementById('i7').value;
    var b = document.getElementById('i8').value;
    var f = document.getElementById('i1').value;
    var x = document.getElementById('i2').value;
    var z = document.getElementById('i6').value;
    var y = document.getElementById('i3').value;
    var start=x.indexOf("@");  
    var end=x.lastIndexOf(".");  
    if (f==null || f=="" || f.length>30)
    {  
        alert("Name can't be blank");  
        return false;  
    }
    else if(y ==0)
    {
        alert("please select proper topic");
       return false;
    }  
    else if(a!=b || a==null || b==null || a=="" || b=="")
     {
        alert("Password Mismatch");
        return false;
    }
    else if (start<1 || end<start+2 || end+2>=x.length)
    {  
        alert("Please enter a valid e-mail address");  
        return false;  
    }           
    else if(isNaN(z) || z.length!=10)
    {
        alert("Not a valid Phone Number");
        return false;
    }
   
}  