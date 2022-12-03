import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

type ICardPerson = {
  name?: string;
  img?: string;
  desc?: string;
  // fb?: string; 
  // linkedin?: string; 
  // ig?: string; 
}

const CardPerson = ({
  name="Full Name",
  img="/img/person.png",
  desc="Lorem Ipsum sir dolor amet. Aioqwu, aojnfwef ujkas rebnu tuio asgo. Adso upoy yirka bisme.",
  // fb,
  // linkedin,
  // ig,
}: ICardPerson) => (
  <Box sx={{ p: ['2px 4px', '2px 8px'] }}>
      <Card sx={{ m: 'auto' }}>
          <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={img}
              sx={{
                pt: '12px',
                height: ['90px', '140px', '270px' ]
              }}
          />
          <CardContent sx={{
            p: { xs: '8px', sm: '12px', md: '16px' }
          }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: { xs: '12px', sm: '14px', md: '18px' },
                  textAlign: 'center',
                }}
              >
                  {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '10px', sm: '12px', md: '16px' }
                }}
              >
                  {desc}
              </Typography>
          </CardContent>
          {/* <CardActions sx={{
              textAlign: 'center',
              display: 'block',
              '& button': { display: 'inline' }
          }}>
              <IconButton size="small"><LinkedInIcon /></IconButton>
              <IconButton size="small"><InstagramIcon /></IconButton>
              <IconButton size="small"><FacebookIcon /></IconButton>
          </CardActions> */}
      </Card>
  </Box>
);

const Team = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: '48px', mb: '60px' }}>
      <Typography variant="h3" sx={{
          marginBottom: '24px',
          fontSize: {xs: '2rem', md: '3rem', textAlign: 'center' }
      }}>
          Our Teams
      </Typography>
      <Box sx={{ display: 'flex' }}>
          <CardPerson name="Bimaa" />
          <CardPerson name="Farhan" />
          <CardPerson name="Tama" />
      </Box>
    </Container>
  );
}

export default Team;