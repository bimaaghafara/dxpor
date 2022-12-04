import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sx: {[key: string]: SxProps} = {
  swiperContainer: {
    marginTop: '36px',
  },
  title: {
    fontSize: {
      xs: '2rem',
      md: '3rem'
    }
  },
  productName: {
    margin: '12px 0 4px',
    fontWeight: 'bold',
    fontSize: {
      xs: '1rem',
      md: '1.5rem'
    }
  },
  slide: {
    marginTop: '16px',
    marginBottom: '40px',
  },
  linkButton: {
    p: '12px 0',
    textDecoration: 'underline !important',
    textUnderlinePosition: 'under !important',
  }
}

const Products = () => {
  const Image = (src: string) => (
    <Box sx={{
        width: '100%',
        paddingBottom: '50%',
        backgroundImage: `url("${src}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }} />
  );

  return (
    <Container maxWidth="lg" sx={sx.swiperContainer}>
      <Typography variant="h3" sx={sx.title} >
        Products
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box sx={sx.slide}>
            {Image('/img/green-bean.png')}
            <Typography variant="h4" sx={sx.productName} >
              Coffee Greenbean
            </Typography>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Link href="/products" passHref>
              <Button color="inherit" sx={sx.linkButton}>
                  See more details . . .
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={sx.slide}>
            {Image('/img/honey.png')}
            <Typography variant="h4" sx={sx.productName} >
              Honey
            </Typography>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Link href="/products" passHref>
              <Button color="inherit" sx={sx.linkButton}>
                  See more details . . .
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={sx.slide}>
            {Image('/img/briquettes.png')}
            <Typography variant="h4" sx={sx.productName} >
              Charcoal Briquettes
            </Typography>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Link href="/products" passHref>
              <Button color="inherit" sx={sx.linkButton}>
                  See more details . . .
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Products;