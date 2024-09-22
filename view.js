function BackgroundSet(nm,ve){
 eval('document.body.style.background'+nm+'="'+ve+'"')
}

function showBlock(block){
  if(block=="widget"){ showm("zw"); } else if(block=="code"){ showm("zc"); } else if(block=="output"){ showm("zw"); } else { console.error("No such a block named "+block+"."); };
}

function hideBlock(){
 document.getElementById('zw').style.display='none';document.getElementById('zc').style.display='none';document.getElementById('zo').style.display='none';document.getElementById('cs').style.display='none';
}
