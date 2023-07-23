export function styleProps2 (selectValue, windowSize){ 
    let styles = {}
        if (selectValue == "bedrooms" || selectValue == "bathrooms"){
          if(windowSize<1050){
            const style = {
               display: "none"
            }
            styles = Object.assign(styles,style);
          }else{
            const style = {
               display: "flex"
            }
            styles = Object.assign(styles,style);
          }
          
        }
        if (selectValue == "max_price" || selectValue == "min_sqft"){
          if(windowSize<850){
            const style = {
               display: "none"
            }
            styles = Object.assign(styles,style);
          }else{
            const style = {
               display: "flex"
            }
            styles = Object.assign(styles,style);
          }
        }
        if (selectValue == "citySlct" || selectValue == "seller"){
          if(windowSize<700){
            const style = {
               display: "none"
            }
            styles = Object.assign(styles,style);
          }else{
            const style = {
               display: "flex"
            }
            styles = Object.assign(styles,style);
          }
        }
        return styles
}