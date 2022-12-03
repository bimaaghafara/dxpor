import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ArticleIcon from '@mui/icons-material/Article';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const KeyFeatures = () => (
    <Container maxWidth="lg" sx={{ pt: '48px' }}>
        <Typography variant="h3" sx={{ fontSize: {xs: '2rem', md: '3rem', textAlign: 'center' }}}> Our Key Features </Typography>
        <Grid container spacing={2} sx={{
            pt: '32px',
            '& p': { lineHeight: 2, textAlign: 'justify', fontSize: ['12px', '12px', '18px'] },
            '& .key-left': { pr: ['16px', '16px', '32px'] },
            '& .key-right': { pl: ['16px', '16px', '32px'] },
            '& svg': { fontSize: ['63px', '63px', '81px'], width: '100%', color: '#348D4F' }
        }}>
            <Grid item xs={12} sm={6} className="key-left">
                <ConnectWithoutContactIcon />
                <p>
                    Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.
                </p>
            </Grid>
            <Grid item xs={12} sm={6} className="key-right">
                <ThumbUpAltIcon />
                <p>
                    Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment, delivering financial results that meet investor expectations.
                </p>
            </Grid>
            <Grid item xs={12} sm={6} className="key-left">
                <ArticleIcon />
                <p>
                    Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.
                </p>
            </Grid>
            <Grid item xs={12} sm={6} className="key-right">
                <WbSunnyIcon />
                <p>
                Innovation means inventing, designing, developing products and services that have high appeal in the marketplace and strengthen customer preference for the Ghafara Universe Indonesia project.
                </p>
            </Grid>
        </Grid>
    </Container>
);

export default KeyFeatures;