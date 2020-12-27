import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Header() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Invoices" icon={<FormatListBulletedIcon />} />
      <BottomNavigationAction label="Add new invoice" icon={<PostAddIcon />} />
    </BottomNavigation>
  );
}
export default Header;
