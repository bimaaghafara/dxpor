import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';

type ISmallBox = {
    sx: SxProps,
    children?: React.ReactNode,
}

const SmallBox = ({
    sx, children
}: ISmallBox) => (
    <Box
        sx={{
            width: '50%',
            pb: '50%',
            position: 'absolute',
            borderRadius: '16px',
            ...sx
        }}
    >
        {children}
    </Box>
);

const AboutUs = () => (
    <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ pt: '54px' }}>
            <Grid item xs={12} sm={7}>
                <Box>
                    <Typography variant="h3" sx={{ fontSize: {xs: '2rem', md: '3rem' }}} >About Us</Typography>
                    <Box sx={{
                        '& p': {
                            textAlign: 'justify',
                            xs: {
                                fontSize: '12px',
                                lineHeight: 2
                            },
                            md: {
                                fontSize: '18px',
                            }
                        },
                        pr: { xs: 0, md : '20%' }
                    }}>
                        <p>
                            We are PT. Dxpor Agri Mahata. The professional capable Supplier & Exporter for the Indonesian arabica coffee beans.
                        </p>
                        <p>
                            We process best coffee bean plantations, spread across several mountains in West Java, Indonesia. We only supply the best quality of arabica coffee bean from West Java Area also known as Java Preanger Coffee. We supply processsed coffee bean such as natural, full washed, semi washed, honey and wine speciality. Please contact us for more info so we can discuss the further info.
                        </p>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{
                        width: ['70%', '70%', '100%'],
                        pb: ['70%', '70%', '100%'],
                        position: 'relative',
                        m: '18px auto'
                    }}
                >
                    <SmallBox
                        sx={{ background: '#1f6200', top: '50%' }}
                    />
                    <SmallBox
                        sx={{ background: '#389f0a', left: '50%' }}
                    />
                    <SmallBox
                        sx={{ background: '#266f05', top: '25%', left: '25%' }}
                    />
                </Box>
            </Grid>
        </Grid>
    </Container>
);

export default AboutUs;