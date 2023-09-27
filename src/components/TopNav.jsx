import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const NavBar = styled(AppBar)({
  height: "10vh",
  backgroundColor: "#333333",
});
const TopNav = (props) => {
  const [groupValue, setgroupValue] = useState("status");
  const [orderValue, setOrderValue] = useState("priority");
  const {setGroup,setOrder} = props;
  
  const handleGroupValue = (e, valueBool) => {
         if(valueBool){
        localStorage.setItem('group',e.target.value);
        setgroupValue(e.target.value);
        setGroup(e.target.value);
         }
        else{
        localStorage.setItem('order',e.target.value);
        setOrderValue(e.target.value);
        setOrder(e.target.value);
        }
  };

  return (
    <div>
      <NavBar position="static">
        <div className="dropOnClick flex-gap-10 p-10">
          <div className="selectGroup flex-sb">
            <span>Grouping</span>
            <select
              value={groupValue}
              onChange={(e) => handleGroupValue(e, true)}
              className="selectStyle"
              name="group"
              id="group"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="selectGroup flex-sb">
            <span>Ordering</span>
            <select
              value={orderValue}
              onChange={(e) => handleGroupValue(e, false)}
              className="selectStyle"
              name="order"
              id="order"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </NavBar>
    </div>
  );
};

export default TopNav;
