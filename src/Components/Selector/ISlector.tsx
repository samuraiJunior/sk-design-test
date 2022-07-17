import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';


interface Iprops {
  children: any,
}

 const NestedList: React.FC <Iprops> = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (<>
    <StyledList>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      >
      
        <ToggleButtonWrapper onClick={handleClick}>
        <ListItemText primary="Показать дополнительные поля" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ToggleButtonWrapper>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </List>
    </StyledList>
  </>
  );
}
export default NestedList

const StyledList=styled("div")`
.MuiList-root{
  width:380px;
  background:transparent;
  padding:0;
  &>*+*{
    margin-top:20px;
  }
}
.MuiInputLabel-outlined{
  font-family: Open Sans!important;
}
`
const ToggleButtonWrapper=styled("div")`
display:flex;
align-items:center;
font-family: Open Sans;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #353238;
flex:0;
&>*+*{
  margin-left:8px;
}

.MuiListItemText-root, svg{
  cursor:pointer;
}
`