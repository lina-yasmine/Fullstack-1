function del(tab,val) {
    var t=new Array() ; 
    var  i=0 ,  j=0; 
 for (i=0 ; i<tab.length; i++)
 {
     if (tab[i]!==val)
     { t[j]=tab[i];
        j++;
      }
 } 
  return t;
}

function del_Dup(tab) {
  
    if (tab.length<=1) 
    return tab;

var temp = new Array();

var i = 0 , j = 0;
for (var i=0; i<tab.length-1; i++)

    if (tab[i] != tab[i+1])
        temp[j++] = tab[i];

temp[j++] = tab[tab.length-1];
return temp ; 

}
var tab = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var val = 2 ; 
console.log(del(tab,val)) ;
console.log( del_Dup(tab) ) ;