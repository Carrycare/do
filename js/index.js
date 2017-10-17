var x0=0;
//js轮播及侧边menu栏
function banner(){
    var oBan=document.getElementById('ban');
    var oBan1=document.getElementById('ban1');
    var oUl=oBan1.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var oMenu=document.getElementById('men');
    var timer=null;
    var num1=0,num2=0;
    var oPoint=document.getElementById('point');
    var aSpan=oPoint.getElementsByTagName('span');

    x0=parseInt((document.documentElement.clientWidth-aLi[0].offsetWidth)/2); 
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.left=x0+'px';
    oMenu.style.left=(document.documentElement.clientWidth-1200)/2+'px';
    aSpan[0].style.opacity="0.7";
    aSpan[0].style.filter="alpha(opacity=70)";
    
    timer=setInterval(function(){
        aSpan[num2].style.opacity="0.3";
        aSpan[num2].style.filter="alpha(opacity=30)";
        num1++;
        num2++;
        if(num1>aLi.length/2){
            oUl.style.left=x0+'px';
            num1=1;
        }
        if(num2==aLi.length/2){
            num2=0;
        }
        x=x0-num1*aLi[0].offsetWidth;
        aSpan[num2].style.opacity="0.7";
        aSpan[num2].style.filter="alpha(opacity=70)";
        animate(oUl,{"left":x});
    },3000)

    for(var i=0;i<aLi.length/2;i++){
        aSpan[i].index2=i;
        aSpan[i].onclick=function(){
            aSpan[num2].style.opacity="0.3";
            aSpan[num2].style.filter="alpha(opacity=30)";
            num2=this.index2;
            aSpan[this.index2].style.opacity="0.7";
            aSpan[this.index2].style.filter="alpha(opacity=70)";
            num1=num2;
            x=x0-num1*aLi[0].offsetWidth;
            animate(oUl,{"left":x});
        }
    }
    
    var oMul=oMenu.getElementsByTagName('ul')[0];
    var aMli=oMul.getElementsByTagName('li');
    var num5=0;
    for(var i=0;i<aMli.length;i++){
        aMli[i].index=i;
        aMli[i].onmouseover=function(){
            num5++;
            var oMdiv=this.getElementsByTagName('div')[0];
           animate(oMdiv,{"width":540});
           this.style.zIndex=num5;
        }
        aMli[i].onmouseout=function(){
            var oMdiv=this.getElementsByTagName('div')[0];
            animate(oMdiv,{"width":0});
        }
    }
}
banner();

//返回顶部功能
function returner(){
    var oReturn=document.getElementById('return');
    
    oReturn.style.right=(document.documentElement.clientWidth-1200)/2+'px';
    window.onscroll=function(){
        var oTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(oTop>500){
           animate(oReturn,{"opacity":100});
        }else{
           animate(oReturn,{"opacity":0});
        }
    }
    oReturn.onclick=function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var speed=0;
        var timer1=null;
    
        if(scrollTop>0){
            clearInterval(timer1);
            timer1=setInterval(function(){
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                speed=Math.ceil(scrollTop/4);
                if(speed==0){
                    clearInterval(timer1);
                }else if(document.body.scrollTop){
                    document.body.scrollTop=scrollTop-speed;
                }else if(document.documentElement.scrollTop){
                    document.documentElement.scrollTop=scrollTop-speed;
                }
            },30)
        }
    }
}
returner();

//选项卡切换
function sel(){
    var oSel=document.getElementById('sel');
    var aSpan1=oSel.getElementsByTagName('span');
    var oSelect1=document.getElementById('select1');
    var oSelect2=document.getElementById('select2');
    
    
    aSpan1[0].onclick=function(){
        this.className="redline";
        aSpan1[1].className='';
        oSelect1.style.display="block";
        oSelect2.style.display="none";
    }
    aSpan1[1].onclick=function(){
        this.className="redline";
        aSpan1[0].className='';
        oSelect2.style.display="block";
        oSelect1.style.display="none";
    }
}
sel();

//顶部栏的点击显现再点击隐藏
function shop(){
    var oShop=document.getElementById('shop');
    var oShopb=document.getElementById('shopb');
    var num6=0;
    oShop.onclick=function(ev){
        num6++;
        var ev=ev||event;

        if(num6%2==1){
            animate(oShopb,{"height":110});
        }else{
            animate(oShopb,{"height":0});
        }
        
        ev.cancelBubble=true;
    }
    document.onclick=function(){
        animate(oShopb,{"height":0});
        num6=0;
    }
}
shop();

//下部的无缝滚动
function lb(){
    var oMove=document.getElementById('move');
    var num0=-2;
    
    oMove.innerHTML+=oMove.innerHTML;
    setInterval(function(){
        num0+=200;
        if(num0>1300){
            num0=198;
            oMove.style.left=0;
        }
        animate(oMove,{"left":-num0});
    },2000)
}
lb();

//窗口改变自适应
window.onresize=function(){
    var oMenu=document.getElementById('men');
    var oReturn=document.getElementById('return');
    var oBan=document.getElementById('ban');
    var oBan1=document.getElementById('ban1');
    var oUl=oBan1.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');

    if(document.documentElement.clientWidth<1200){
        oMenu.style.left=0;
        oReturn.style.right=0;
    }else{
        oMenu.style.left=(document.documentElement.clientWidth-1200)/2+'px';
        oReturn.style.right=(document.documentElement.clientWidth-1200)/2+'px';
    }
    x0=parseInt((document.documentElement.clientWidth-aLi[0].offsetWidth)/2);
    oUl.style.left=x0+'px'; 
}

function ser(){
    var oSearch=document.getElementById('search');
    oSearch.onfocus=function(){
        this.placeholder='';
    }
    oSearch.onblur=function(){
        this.placeholder='请输入关键字';
    }
}
ser();