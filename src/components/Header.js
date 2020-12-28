import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import kogucik from '../kogucik.png';

function Header() {
  const [value, setValue] = useState(0);

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <img src={kogucik} alt="kogucik" style={{ height: '100%', float: 'left' }} />
        <BottomNavigationAction label="Invoices" component={Link} to="/invoices" icon={<FormatListBulletedIcon />} />
        <BottomNavigationAction label="Add new invoice" component={Link} to="/addinvoice" icon={<PostAddIcon />} />
      </BottomNavigation>
    </>
  );
}
export default Header;
