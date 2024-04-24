import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { account } from 'src/_mock/account';

import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        سلام, خوش آمدی {account.displayName} 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="تعداد صورت حساب ها"
            total={26}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="مبلغ فروش"
            total={135246831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="میانگین هر فروش"
            total={5201360}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="صورت های نا موفق"
            total={2}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="فروش"
            subheader="3 کد پر فروش"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'ایمن الکترونیک یاس',
                  type: 'column',
                  fill: 'solid',
                  data: [455632, 755132, 575905, 508902, 428012, 322312, 355111, 391992, 318832, 614092, 519852],
                },
                {
                  name: 'آتیه سازان کویر یزدان',
                  type: 'area',
                  fill: 'gradient',
                  data: [295372, 450132, 675905, 808372, 998012, 722312, 555371, 491992, 590832, 810792, 619952],
                },
                {
                  name: 'توسعه اطلاعات مالی ایساتیس پویا',
                  type: 'line',
                  fill: 'solid',
                  data: [195372, 250132, 75905, 88372, 98012, 22312, 55371, 91992, 190832, 210792, 19952],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="تعداد صورت حساب ها"
            chart={{
              series: [
                { label: 'ایمن الکترونیک یاس', value: 10 },
                { label: 'آتیه سازان کویر یزدان', value: 5 },
                { label: 'توسعه اطلاعات مالی ایساتیس پویا', value: 7 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="کالاهای یا خدمات پر فروش"
            subheader="10 مورد پر فروش"
            chart={{
              series: [
                { label: 'کابل شبکه کت 6', value: 15406300 },
                { label: 'دوربین هایک ویژن مدل DT53x', value: 14900000 },
                { label: 'دوربین هایک ویژن مدل DT56x', value: 13500000 },
                { label: 'لوله پلکسی', value: 8500000 },
                { label: 'هارد 2 ترا هیتاچی', value: 8000000 },
                { label: 'سوئیچ شبکه مدل 5560', value: 7000000 },
                { label: 'سوئیچ شبکه مدل 5561', value: 6500000 },
                { label: 'سوئیچ شبکه مدل 5562', value: 6000000 },
                { label: 'دوربین داهوا مدل 400s', value: 3500000 },
                { label: 'کابل hdmi', value: 450000 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="وضعیت"
            chart={{
              categories: ['تعداد', 'مبلغ', 'خطا', 'هشدار','ابطال'],
              series: [
                { name: 'ایمن الکترونیک یاس', data: [80, 50, 30, 40, 25] },
                { name: 'آتیه سازان کویر یزدان', data: [20, 30, 40, 80, 60] },
                { name: 'توسعه اطلاعات مالی ایساتیس پویا', data: [44, 76, 78, 13, 15] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="اطلاعیه های سازمان"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="رویداد ها اخیر"
            list={[...Array(4)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'ثبت پروقایل ایمن الکترونیک یاس',
                'ارسال صورت حساب پارکینگ شهرداری',
                'ورود کاربر',
                'تغییر رمز شماره همراه',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>


      </Grid>
    </Container>
  );
}
