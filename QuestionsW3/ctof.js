function convertc(){
    celcius=document.getElementById("celcius").value;
    let a=(9/5)*celcius+32;
    document.getElementById("farhaneit").value=a;
  
}

function convertf(){
    farhaneit=document.getElementById("farhaneit").value;
    let a=(5/9)*(farhaneit-32);
    document.getElementById("celcius").value=a;
}