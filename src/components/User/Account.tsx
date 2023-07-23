import "./Account.scss";
import { useState} from "react";
import { MyAccount } from "./Dashboard/MyAccount";
import { Password } from "./Dashboard/Password";
import { Accounts } from "./Dashboard/Accounts";
import { RootState } from "../../Store/store";
import { useAppSelector } from "../../Store/hooks";
import { MyProperties } from "./Dashboard/MyProperties";
import { Properties } from "./Dashboard/Properties";
import { Articles } from "./Dashboard/Articles";
import { MyArticles } from "./Dashboard/MyArticles";
import { MyComments } from "./Dashboard/MyComments";
import { Comments } from "./Dashboard/Comments";
import { MyTransactions } from "./Dashboard/MyTransactions";
import { Transactions } from "./Dashboard/Transactions";

export const Account : React.FC = () => {

  const [options, setOptions] = useState<string>("account");
  const user = useAppSelector((state : RootState) => state.user.value);

  return (
    <div className="account-container">
      <div className="account-categories">
        <p className={(options == "account") ? "account-clicked" : undefined} onClick={() => setOptions("account")}>Account</p>
        <p className={(options == "password") ? "account-clicked" : undefined} onClick={() => setOptions("password")}>Password</p>
        {user.user.admin && <p className={(options == "accounts") ? "account-clicked" : undefined} onClick={() => setOptions("accounts")}>All Accounts</p>}
        {(user.user.admin || user.user.seller) && <p className={(options == "properties") ? "account-clicked" : undefined} onClick={() => setOptions("properties")}>My properties</p>}
        {user.user.admin && <p className={(options == "allproperties") ? "account-clicked" : undefined} onClick={() => setOptions("allproperties")}>All properties</p>}
        {(user.user.admin || user.user.blogger) && <p className={(options == "articles") ? "account-clicked" : undefined} onClick={() => setOptions("articles")}>My articles</p>}
        {user.user.admin && <p className={(options == "allarticles") ? "account-clicked" : undefined} onClick={() => setOptions("allarticles")}>All articles</p>}
        <p className={(options == "mycomments") ? "account-clicked" : undefined} onClick={() => setOptions("mycomments")}>My comments</p>
        {user.user.admin && <p className={(options == "comments") ? "account-clicked" : undefined} onClick={() => setOptions("comments")}>All Comments</p>}
        <p className={(options == "transactions") ? "account-clicked" : undefined} onClick={() => setOptions("transactions")}>My Transactions</p>
        {user.user.admin && <p className={(options == "alltransactions") ? "account-clicked" : undefined} onClick={() => setOptions("alltransactions")}>All Transactions</p>}
      </div>

      {(options == "account") && <MyAccount/>}
      {(options == "password") && <Password/>}
      {(options == "accounts") && <Accounts/>}
      {(options == "properties") && <MyProperties/>}
      {(options == "allproperties") && <Properties/>}
      {(options == "articles") && <MyArticles/>}
      {(options == "allarticles") && <Articles/>}
      {(options == "mycomments") && <MyComments/>}
      {(options == "comments") && <Comments/>}
      {(options == "transactions") && <MyTransactions/>}
      {(options == "alltransactions") && <Transactions/>}
    </div>
  )
}