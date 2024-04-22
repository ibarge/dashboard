import { useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

const PROFILE = [
  {
    value: '14003474608',
    label: 'توسعه اطلاعات مالی ایساتیس پویا',
    icon: '/assets/icons/icons8-company-48.png',
  },
  {
    value: '14009114360',
    label: 'آتیه سازان کویر یزدان',
    icon: '/assets/icons/icons8-company-48.png',
  },
  {
    value: '14004814188',
    label: 'ایمن الکترونیک یاس',
    icon: '/assets/icons/icons8-company-48.png',
  },
];

// ----------------------------------------------------------------------

export default function ProfilePopover() {

  const [active, setActive] = useState(PROFILE[0]);

  function splitString(str) {
    const arrayString = str.split(" ");
    const arrayStringTwo = arrayString.slice(0, 2).map(i=>i.slice(0,1));
    let concatenatedString = "";

    for (let i = 0; i < arrayStringTwo.length; i+=1) {
      concatenatedString += arrayStringTwo[i];
      if (i < arrayStringTwo.length - 1) {
        concatenatedString += " ";
      }
    }  
    return concatenatedString;
}


  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (select) => {
    if (select) {
      setActive(select)
    }
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        {/* <img src={active.icon} alt={active.label} /> */}
        <h6>{splitString(active.label)}</h6>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={()=>handleClose(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 280,
          },
        }}
      >
        {PROFILE.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === active.value}
            onClick={() => handleClose(option)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
