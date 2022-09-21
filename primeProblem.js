
function primeProblem(n){
if(n<2){
return false;
}
for(i=2;i<=n**0.5;i++){
    if(n%i==0){
        return false;
    }
}
return true;
}
