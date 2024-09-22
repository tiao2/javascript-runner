function BackgroundSet(nm,ve){
 eval('document.body.style.background'+nm+'="'+ve+'"')
}

function showBlock(block){
  if(block=="widget"){ shown("zw"); } else if(block=="code"){ shown("zc"); } else if(block=="output"){ shown("zw"); } else { console.error("No such a block named "+block); };
}

function hideBlock(){
 document.getElementById('zw').style.display='none';document.getElementById('zc').style.display='none';document.getElementById('zo').style.display='none';document.getElementById('cs').style.display='none';
}
