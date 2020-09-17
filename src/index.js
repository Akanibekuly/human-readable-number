module.exports = function toReadable (number) {
var arr=new Array([0,'zerro'],[1,'one'],[2,'two'],[3,'three'],[4,'four'],[5,'five'],
[6,'six'],[7,'seven'],[8,'eight'],[9,'nine'],[10,'ten'],[11,'eleven'],[12,'twelve'],
[13,'thirteen'],[14,'fourteen'],[15,'fifteen'],[16,'sixteen'],[17,'seventeen'],
[18,'eighteen'],[19,'nineteen'],[20,'twenty'],[30,'thirty'],[40,'forty'],[50,'fifty'],
[60,'sixty'],[70,'seventy'],[80,'eighty'],[90,'ninety'],[100,'hundred'],[1000,'thousand'])
  const numberToWords=new Map(arr);
  res="";
  if(number==0){
      return "zero";
  }
    var hun=Math.floor(number/100);
    if(hun!=0){
        res+=numberToWords.get(hun)+" hundred";
        number-=hun*100;
    }
    if(number==0){
        return res;
    }
    if(numberToWords.get(number)){
        if(res!=""){
            res+=" "
        }
        res+=numberToWords.get(number);
    } else{
        if(res!=""){
            res+=" "
        }
        res+=numberToWords.get(Math.floor(number/10)*10);
        if(res!=""){
            res+=" "
        }
        res+=numberToWords.get(number%10);
    }
    return res;
}
