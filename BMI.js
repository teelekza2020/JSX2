export default class BMI{
  bmiCalculate(weight,height){
    return weight/(height**2);
  }
  bmiGande(b,reg){
    var string;
    if(reg == "asia"){
      if(b<=18.5){
        string = "Under weight";
      }
      else if(b>18.5 && b<=24.9){
        string = "Normal weight";
      }
      else if(b>24.9 && b<=29.9){
        string = "Overweight";
      }
      else if(b>29.9){
        string = "Obesity";
      }
    }
    else if(reg == "western"){
      if(b<=19.5){
        string = "Under weight";
      }
      else if(b>19.5 && b<=34.9){
        string = "Normal weight";
      }
      else if(b>34.9 && b<=39.9){
        string = "Overweight";
      }
      else if(b>39.9){
        string = "Obesity";
      }
    }
    return string;
  }
}