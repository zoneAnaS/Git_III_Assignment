
function primeProblem(number){
if(number<2){
return false;
}
for(i=2;i<=number**1/2;i++){
    if(number%i==0){
        return false;
    }
}
return true;
}
