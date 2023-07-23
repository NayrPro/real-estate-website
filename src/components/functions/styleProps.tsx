export function styleProps (selectValue, windowSize){ 
    let styles = {}
    if (selectValue == "bedrooms" || selectValue == "bathrooms"){
      if(windowSize<1100){
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