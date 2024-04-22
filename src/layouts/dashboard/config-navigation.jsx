import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'خانه',
    path: '/',
    icon: icon('home'),
  },
  {
    title: 'صورت حساب',
    path: '/invoice',
    icon: icon('invoice'),
  },
  {
    title: 'گزارش',
    path: '/log',
    icon: icon('ic_analytics'),
  }
];

export default navConfig;
