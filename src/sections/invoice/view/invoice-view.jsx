import { useState } from 'react';

import {TabulatorFull as Tabulator} from 'tabulator-tables';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';


import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function InvoicePage() {





  const [dataVar, setDataVar] = useState([
    {row:1, age:22, name:'moeen'},
    {row:2, age:24, name:'farsh'},
    {row:3, age:15, name:'pooya'},
    {row:4, age:68, name:'ehsan'},
    {row:5, age:42, name:'marzi'},
  ])

  const table = new Tabulator("#table", {
    data:dataVar,
    autoColumns:true,
  });

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          افزودن
        </Button>
      </Stack>

      <Card>

        <Container id='table'/>
      </Card>
    </Container>
  );
}
