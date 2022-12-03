import Box from '@mui/material/Box';

const HomeBanner = () => (
    <Box
        sx={{
            margin: '0 -24px',
            background: "url('/img/home-banner.png') center center",
            backgroundSize: "cover",
            pb: {
                xs: '50%',
                sm: '40%',
                md: '30%'
            },
            '& img': {
                width: '100%'
            }
        }}
    />
)

export default HomeBanner;