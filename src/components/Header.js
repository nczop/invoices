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
        style={{height: '90px'}}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            background: 'lightGray',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <img
            src={kogucik}
            alt="kogucik"
            style={{ height: '90%', paddingRight: '70px', paddingLeft: '50px' }}
            data-testid = "kogucik"
          />
          <div >
            <BottomNavigationAction
              label={<span
              data-testid = "invoices">Invoices
              </span>}
              component={Link}
              to="/invoices"
              icon={<FormatListBulletedIcon fontSize="large"/>}
              showLabel
            />
            <BottomNavigationAction
              label="Add new invoice"
              component={Link}
              to="/addinvoice"
              icon={<PostAddIcon fontSize="large" />}
              showLabel
            />
          </div>
          <div />
        </div>
      </BottomNavigation>
    </>
  );
}
export default Header;
