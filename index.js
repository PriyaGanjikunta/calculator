let btn = document.querySelectorAll(".btn");
let res = document.querySelector(".val");
let pre='', curr='', val='',opr='';
let str='';

btn.forEach((bn) => {
    bn.addEventListener("click",() => {
        val=bn.innerText;
        if(val == 'clear'){
            pre=''; curr=''; opr=''; str='';
            res.innerText=0;
    
        }else if(['+', '-', '*', '/'].includes(val)){
            if(curr){
                pre = curr;
                opr = val;
                curr='';
                str = str + val;
                res.innerText=str;
                console.log(curr, pre, opr);
            }
        }else if(val == "="){
                if(curr && pre && opr){
                    if(opr == "+"){
                        curr = Number(pre)+Number(curr);
                        console.log(curr);
                        res.innerText=curr;
                        pre='';
                        str=curr;
                    }else if(opr == "-"){
                        curr = Number(pre)-Number(curr);
                        res.innerText=curr;
                        pre='';
                        str=curr;
                    }else if(opr == "*"){
                        curr = Number(pre)*Number(curr);
                        res.innerText=curr;
                        pre='';
                        str=curr;
                    }else{
                        curr = Number(pre)/Number(curr);
                        res.innerText=curr;
                        pre='';
                        str=curr;
                    }

                }
        }else{
            curr = curr + val;
            console.log(curr);
            str = str + val;
            res.innerText=str;
        }
        
    });
});