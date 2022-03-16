 function sort (tab) {
  for (var i = 0; i < tab.length-1; i++)
  {
    var min = i;

    for (j = i + 1; j < tab.length; j++) {
      if (tab[j] < tab[min]) {
        min = j;
      }
    }

    if (min != i) {
      var temp = tab[i];
      tab[i] = tab[min];
      tab[min] = temp;
    }
  }
    return tab ;
}

var tab = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sort(tab)) ;