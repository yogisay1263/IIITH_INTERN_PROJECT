import React from 'react';
import './footer.css';
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { LinkedIn,Email,GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate('/next');
  };

  return (
    <footer>
      <Box
        component="footer"
        sx={{
          backgroundImage: `url('path/to/your/image.jpg')`, // Add the path to your background image
          backgroundImage: 'linear-gradient(45deg, #7ED7C1 30%, #009688 90%)', // Updated gradient// Add your desired background color
          backgroundRepeat: 'repeat', // Set to 'repeat' if you want the image to repeat
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are scholorly quatater company, dedicated to providing the best service to our
                customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                IIIT hydreabad,Gacchibowli.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: yadlayogitha@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +91 8317556971
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.linkedin.com/in/yadla-yogitha-124122229/" color="inherit">
                <LinkedIn />
              </Link>
              <Link
                href="mailto:yadlayogitha@gmail.com"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Email />
              </Link>
              <Link href="https://github.com/yogisay1263" color="inherit">
                <GitHub />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://github.com/yogisay1263">
                Yogitha
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
