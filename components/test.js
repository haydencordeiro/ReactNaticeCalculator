
function Basic(n1,n2,op){
    if(op=="+"){
        return Number(n1)+Number(n2);
    }
    
    if(op=="-"){
        return Number(n1)-Number(n2);
    }
    if(op=="/"){
        return Number(n1)/Number(n2);
    }
    if(op=="*"){
        return Number(n1)*Number(n2);
    }
    
}

function GetTotal(){
    var val="12+24-12*2";
    var num1="";
    var num2="";
    var op="";
    var result=null;
    var waiting=false;
    for (let i = 0; i < val.length; i++) {
        var temp=val.charAt(i);
        
        if(temp!='+' &&  temp!='-' &&  temp!='*' && temp!='/'){
            num1+=temp;
            // console.log('Inside if');
            // console.log(temp);
        }
        else{
            if(result==null){
                result=num1;
                num1="";
                waiting=true;
                op=temp;

            }
            else {
                // console.log(result);
                // console.log(num1);
                // console.log(op);
                result=Basic(result,num1,op);
                num1=""
                waiting=false;
                op=temp;


            }
            }
            

        }

        return(Basic(result,num1,op));
       
      }

GetTotal()