import { Typography, Container } from '@mui/material';

const Testimonial = () => (
  <section className="bg-gray-200 py-4">
    <Container maxWidth="md">
      <Typography variant="h6" align="center">
        Petrojet Gold has been instrumental in our success. Their expertise and dedication are unparalleled.
      </Typography>
      <Typography variant="subtitle1" align="center">
        - CEO, Petrojet Gold
      </Typography>
    </Container>
  </section>
);

export default Testimonial;
