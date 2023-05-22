export const FormType = (input) => {
    switch (input) {
  case 'message':
    return 'textarea';
    break;
  case 'body':
    return 'textarea';
    break;
  case 'description':
    return 'textarea';
    break;
  case 'newComment':
    return 'textarea';
    break;
  case 'password':
    return 'password';
    break;
  case 'email':
    return 'email';
    break;
  case 'minSqft':
    return 'select';
    break;
  case 'citySlct':
    return 'select';
    break;
  case 'stateSlct':
    return 'select';
    break;
  case 'maxPrice':
    return 'select';
    break;
  case 'bedrooms':
    return 'select';
    break;
  case 'bathrooms':
    return 'select';
    break;
  case 'properties':
    return 'select';
    break;
  case 'seller':
    return 'select';
    break;
  case 'usertype':
    return 'select';
    break;
  case 'price':
    return 'number';
    break;
  case 'sqft':
    return 'number';
    break;
  case 'transaction':
    return 'radio';
    break;
  case 'url':
    return 'url';
    break;
  default: 
    return 'text'
    }
    
}
