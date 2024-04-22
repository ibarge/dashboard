import { Helmet } from 'react-helmet-async';

import { InvoiceView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> برگه | صورت حساب </title>
      </Helmet>

      <InvoiceView />
    </>
  );
}
