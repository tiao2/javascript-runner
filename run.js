function runJS(cd){
     if(cd.split('document').length>1){ console.error("“document” is not supposed in this runner."); } else {try {eval(cd);} catch(e){console.error(e.message);};};
     }

    var printc,te;
    printc=function(v){
      document.getElementById("outputs").innerText+='< '+v+'\n';
      }
    te=function(e){
      document.getElementById("outputs").innerText+='< Error:'+e+'\n';
    }
var console={
      log: (v)=>printc(v),
      error: (e)=>te(e)
    };

function sendMessage(m){
     document.getElementById('mes').style.display='block'; document.getElementById('gates').style.display='block';
     document.getElementById('txt').innerHTML=m;
    }
