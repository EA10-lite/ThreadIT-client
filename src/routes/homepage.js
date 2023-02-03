import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Feeds, Story } from '../components';

function Homepage() {
  const open_upload_menu = useOutletContext();
  return (
    <>
      <Story />
      <Feeds 
        open-upload_menu={open_upload_menu}
      />
    </>
  )
}

export default Homepage;