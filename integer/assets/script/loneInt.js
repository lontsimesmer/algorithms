const a = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
  let element = 0;
  for (let i = 0; i < a.length; i++) {
    let length = 0;
    for (let k = 0; k < a.length; k++) {
      if (a[k] == a[i]) {
        length++;
      }
    }
    if (length == 1) {
      element = a[i];
    }
  }
  console.log(element);
}
lonelyinteger(a);
