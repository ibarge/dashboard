import { useState } from 'react';
import PropTypes from 'prop-types';
import { set, sub } from 'date-fns';
import { faker } from '@faker-js/faker';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.string.uuid(),
    title: 'ارسال صورت حساب',
    description: 'احداث پارکینگ شهداری حمیدیا',
    avatar: null,
    type: 'invoice_send',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: "ثبت موفق",
    description: 'تجهیزات بیمارستان افشار',
    avatar: null,
    type: 'invoice_success',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: 'خطا',
    description: 'حمل بار شرکت پردیسان',
    avatar: null,
    type: 'invoice_error',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: 'ثبت با هشدار',
    description: 'جواهرات اقای پازوکی',
    avatar: null,
    type: 'invoice_warnning',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: 'پروفایل اضافه شد',
    description: 'ایمن الکترونیک یاس',
    avatar: null,
    type: 'profile_add',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
        </Badge>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">پیام ها</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              شما {totalUnRead} پیام جدید دارید
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                جدید
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                قدیمی
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            مشاهده همه
          </Button>
        </Box>
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2" sx={{textAlign:'right'}}>
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === 'invoice_send') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/icons8-outgoing-data-50.png" />,
      title,
    };
  }
  if (notification.type === 'invoice_success') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/icons8-success-50.png" />,
      title,
    };
  }
  if (notification.type === 'invoice_error') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/icons8-error-50.png" />,
      title,
    };
  }
  if (notification.type === 'invoice_warnning') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/icons8-warnning-50.png" />,
      title,
    };
  }
  if (notification.type === 'profile_add') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/icons8-add-50.png" />,
      title,
    };
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title,
  };
}
