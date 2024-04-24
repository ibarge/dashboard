import { useState, useEffect } from 'react';

import { TabulatorFull as Tabulator } from 'tabulator-tables';

import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { Box, ButtonGroup, Modal, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function InvoicePage() {
  const [insertOpen, setInsertOpen] = useState(false)
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
              "page_size":"اندازه صفحه"
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
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

        <Typography variant="h4">صورت حساب</Typography>



        <ButtonGroup variant="contained" color="inherit" sx={{direction:'ltr'}}>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={()=>setInsertOpen(true)}>
          افزودن
        </Button>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="octicon:download-24" />}>
          دانلود
        </Button>

        </ButtonGroup>



      </Stack>
      <Card>
        <Container id="table" />
      </Card>


      <Modal open={insertOpen} onClose={()=>setInsertOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}
