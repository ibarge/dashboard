import { useState, useEffect } from 'react';

import { TabulatorFull as Tabulator } from 'tabulator-tables';

import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

// ----------------------------------------------------------------------

export default function InvoicePage() {
  const [dataVar, setDataVar] = useState([
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12' , status:'موفق'},
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01' , status:'پردازش'},
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18' , status:'موفق'},
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'جاده کمربندی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18' , status:'خطا'},
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12' , status:'موفق'},
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01' , status:'پردازش'},
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18' , status:'موفق'},
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18' , status:'خطا'},
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12' , status:'موفق'},
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01' , status:'پردازش'},
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18' , status:'موفق'},
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18' , status:'خطا'},
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12' , status:'موفق'},
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01' , status:'پردازش'},
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18' , status:'موفق'},
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18' , status:'خطا'},
    { Title: 'باسکول ابوذر', taxid: 22, createat: '1402-10-12' , status:'موفق'},
    { Title: 'پارکینگ شهرداری', taxid: 24, createat: '1402-10-01' , status:'پردازش'},
    { Title: 'تجهیزات فروشگاه رفاه', taxid: 15, createat: '1402-09-18' , status:'موفق'},
    { Title: 'حمل بار نخعی', taxid: 68, createat: '1402-11-22' , status:'موفق'},
    { Title: 'سرویس خودرو جهاد', taxid: 42, createat: '1403-01-18' , status:'خطا'},
  ]);

  useEffect(() => {
    const table = new Tabulator('#table', {
      data: dataVar,
      layout:"fitColumns",
      layoutColumnsOnNewData:true,
      responsiveLayout:"hide",
      textDirection:"rtl",
      placeholder: 'داده ای برای نمایش موجود نیست',
      placeholderHeaderFilter:"داده ای منطق نیست",
      pagination:true,
      paginationSize:5,
      paginationSizeSelector:[5, 10, 20, 30, 50, 80, 130, true],
      langs:{
        "default":{
            "pagination":{
              "first":"نخست",
              "first_title":"صفحه نخست",
              "last":"آخرین",
              "last_title":"اخرین صفحه",
              "prev":"قبلی",
              "prev_title":"صفحه قبل",
              "next":"بعدی",
              "next_title":"صفحه بعد",
              "all":"همه",
            },
        }
    },
      columns: [
        { title: 'عنوان', field: 'Title', widthGrow:4 ,responsive:0, headerFilter:"input", minWidth:120},
        { title: 'شناسه یکتا', field: 'taxid', widthGrow:3 ,responsive:2, headerFilter:"input", minWidth:80},
        { title: 'تاریخ', field: 'createat', widthGrow:2 ,responsive:3, headerFilter:"input", minWidth:60},
        { title: 'وضعیت', field: 'status', widthGrow:2 ,responsive:1, headerFilter:"input", minWidth:40},
      ],
    });



  }, [dataVar]);

  return (
    <Container>
      <Grid2 container spacing={17}>
        <Grid2 xs={4}>
        <Typography variant="h4">صورت حساب</Typography>
        </Grid2>
        <Grid2 xs={8}>
          {null}
        </Grid2>
        <Grid2 xs={5}>
        <Container>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          افزودن
        </Button>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          دانلود
        </Button>

        </Container>
        </Grid2>

      </Grid2>
      <Card>
        <Container id="table" />
      </Card>
    </Container>
  );
}
