
function primeProblem(n){
if(n<2){
return true;
}
for(i=0;i<=n**0.5;i++){
    if(n%i==0){
        return false;
    }
}
return true;
}
