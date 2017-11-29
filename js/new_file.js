var x=1,y=z=0;
function add(n){
    return n=n+1;
}
y=add(x);
function add(n){
    return n=n+3;
}
z=add(x);

alert(x+","+y+","+z);