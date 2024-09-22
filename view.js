function BackgroundSet(nm,ve){
 eval('document.body.style.background'+nm+'="'+ve+'"')
}

function showBlock(block){
  if(block=="widget"){ shown("zw"); } else if(block=="code"){ shown("zc"); } else if(block=="output"){ shown("zw"); } else { console.error("No such a block named "+block); };
}

function hideBlock(){

}
