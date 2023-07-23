import { Navigate } from "react-router-dom";
import { useAppSelector } from "./Store/hooks";
import { RootState } from "./Store/store";

type Props = {
    children : any;
    roles : any; 
    role : any; 
    page : any;
  };

export const Authentication : React.FC<Props> = ({ children, roles, role, page }) => {
    const user = useAppSelector((state : RootState) => state.user.value);
    const userLength = Object.keys(user).length;
    const pagename = page.name; 

    
    function Page(pagename){
        if(pagename == "login" || pagename == "signup"){
            if(userLength>0){
                return <Navigate to="/" />
            }
            return children
        }else{
            return privatePage(pagename)
        } 
    }
    
    function privatePage(pagename){
        if(userLength<1){
            return <Navigate to="/login" />
        }
        return verifyRoles(pagename)
    }
    
    function verifyRoles(pagename){
        switch(pagename){
            case "sell": return allowAccess(role.name)
            break;
            case "blog/article": return allowAccess(role.name)
            break;
            case "edit/property": return allowAccess(role.name)
            break;
            case "edit/article": return allowAccess(role.name)
            break;
            case "account": return children
            break;
            default:
                break;
        }
    }
        
    function allowAccess(rolename){
        if(!roles.admin){
            let found = false;
            return Object.keys(roles).map((role, i) => {
                if(role == rolename && roles[role]){
                    found = true;
                    return  children
                }else{
                    if (Object.keys(roles).length-1 == i && !found) { return <Navigate key={i} to="/"/>}
                }
            })
        }
        if(roles.admin){
            return children
        }
        return <Navigate to="/" />
    }

    return (
        Page(pagename)
    )

}