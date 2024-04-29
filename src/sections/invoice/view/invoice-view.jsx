import { useState, useEffect } from 'react';

import { TabulatorFull as Tabulator } from 'tabulator-tables';

import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import {
  ButtonGroup,
  // Divider,
  Grid,
  Modal,
  Stack,
  // TextField,
  // Tooltip,
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

// ----------------------------------------------------------------------

export default function InvoicePage() {
  const [insertOpen, setInsertOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [taxid, setTaxid] = useState('');
  const [indatim, setIndatim] = useState('');
  const [indati2m, setIndati2m] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = useState([
    {
      key: 0,
      label: 'مرحله نخست',
      icon: 'eva:plus-fill',
      content: 
      activeStep
      ,
    },
    {
      key: 1,
      label: 'مرحله دوم',
      icon: 'akar-icons:circle-plus-fill',
      content: <Typography>مرحله 22</Typography>,
    },
    {
      key: 2,
      label: 'مرحله سوم',
      icon: 'teenyicons:face-id-solid',
      content: <Typography>مرحله 33</Typography>,
    },
    {
      key: 3,
      label: 'مرحله چهارم',
      icon: 'ic:baseline-face-3',
      content: <Typography>مرحله 44</Typography>,
    },
  ]);

  const [dataVar, setDataVar] = useState([
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12', status: 'موفق' },
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01', status: 'پردازش' },
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18', status: 'موفق' },
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'جاده کمربندی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18', status: 'خطا' },
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12', status: 'موفق' },
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01', status: 'پردازش' },
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18', status: 'موفق' },
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18', status: 'خطا' },
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12', status: 'موفق' },
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01', status: 'پردازش' },
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18', status: 'موفق' },
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18', status: 'خطا' },
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12', status: 'موفق' },
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01', status: 'پردازش' },
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18', status: 'موفق' },
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18', status: 'خطا' },
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12', status: 'موفق' },
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01', status: 'پردازش' },
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18', status: 'موفق' },
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22', status: 'موفق' },
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18', status: 'خطا' },
  ]);

  useEffect(() => {
    const table = new Tabulator('#table', {
      data: dataVar,
      layout: 'fitColumns',
      layoutColumnsOnNewData: true,
      responsiveLayout: 'hide',
      textDirection: 'rtl',
      placeholder: 'داده ای برای نمایش موجود نیست',
      placeholderHeaderFilter: 'داده ای منطق نیست',
      pagination: true,
      paginationSize: 5,
      paginationSizeSelector: [5, 10, 20, 30, 50, 80, 130, true],
      langs: {
        default: {
          pagination: {
            first: 'نخست',
            first_title: 'صفحه نخست',
            last: 'آخرین',
            last_title: 'اخرین صفحه',
            prev: 'قبلی',
            prev_title: 'صفحه قبل',
            next: 'بعدی',
            next_title: 'صفحه بعد',
            all: 'همه',
            page_size: 'اندازه صفحه',
          },
        },
      },
      columns: [
        {
          title: 'عنوان',
          field: 'Title',
          widthGrow: 4,
          responsive: 0,
          headerFilter: 'input',
          minWidth: 120,
        },
        {
          title: 'شناسه یکتا',
          field: 'taxid',
          widthGrow: 3,
          responsive: 2,
          headerFilter: 'input',
          minWidth: 80,
        },
        {
          title: 'تاریخ',
          field: 'createat',
          widthGrow: 2,
          responsive: 3,
          headerFilter: 'input',
          minWidth: 60,
        },
        {
          title: 'وضعیت',
          field: 'status',
          widthGrow: 2,
          responsive: 1,
          headerFilter: 'input',
          minWidth: 40,
        },
      ],
    });
  }, [dataVar]);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">صورت حساب</Typography>

        <ButtonGroup variant="contained" color="inherit" sx={{ direction: 'ltr' }}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => setInsertOpen(true)}
          >
            افزودن
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="octicon:download-24" />}
          >
            دانلود
          </Button>
        </ButtonGroup>
      </Stack>
      <Card>
        <Container id="table" />
      </Card>

      <Modal
        open={insertOpen}
        onClose={() => setInsertOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" component="h2">
                صورت حساب
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Stepper activeStep={activeStep}>
                {step.map((i) => (
                  <Step key={i.key}>
                    <StepLabel sx={{ alignSelf: 'flex-start' }}>
                      <Typography>{i.label}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" component="h4">
                {activeStep}
              </Typography>
            </Grid>
          </Grid>


          {/* 



              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="h6" component="h4">
                  سربرگ
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tooltip
                  title="فیلد عنوان به سامانه ارسال نمیشود. برای تمایز بین صورت حساب ها در داشبورد از عنوان های معنا دار استفاده شود"
                  arrow
                >
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="عنوان صورت حساب"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    dir="rtl"
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tooltip title="این مقدار توسط سیستم پر خواهد شد" arrow>
                  <TextField
                    required
                    id="taxid"
                    name="taxid"
                    label="شماره منحصر به فرد مالیاتی"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    disabled
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Tooltip
                  title="فیلد عنوان به سامانه ارسال نمیشود. برای تمایز بین صورت حساب ها در داشبورد از عنوان های معنا دار استفاده شود"
                  arrow
                >
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="تاریخ و زمان صدور"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    dir="rtl"
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Tooltip title="این مقدار توسط سیستم پر خواهد شد" arrow>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="تاریخ و زمان ایجاد"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    disabled
                  />
                </Tooltip>
              </Grid>
            </Grid> */}
          <Button disabled={activeStep === 3} onClick={() => setActiveStep(activeStep + 1)}>
            بعدی
          </Button>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>
            قبلی
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}
