import React from 'react';
import { Breakpoint } from '@mui/material';
import Nav from 'src/components/nav';
import Footer from 'src/components/footer';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

type ILayoutProps = {
    children?: React.ReactNode;
    maxWidth?: false | Breakpoint;
    showContact?: boolean;
}

const Layout = ({
    children,
    maxWidth = 'lg',
    showContact,
}: ILayoutProps) => {
    const handleWaCLick = () => {
        const waLink = 'https://api.whatsapp.com/send?phone=628996469000&text=Hi%20Dxpor!%20I%20want%20to%20know%20about%20.%20.%20.';
        if (typeof window !== 'undefined') window?.open?.(waLink, '_blank')?.focus();
    }

    return (
        <>
            <Nav />
            <Container maxWidth={maxWidth} sx={{ mt: {xs: '56px', md: '64px'} }}>
                {children}
            </Container>
            <Fab onClick={handleWaCLick} size="large" aria-label="WA" sx={{
                position: 'fixed',
                right: ['20px', '40px'],
                bottom: ['20px', '30px'],
                color: '#fff',
                background: '#25d366',
                '& :hover': {
                    color: '#25d366'
                }
            }}>
                <WhatsAppIcon />
            </Fab>
            <Footer showContact={showContact}/>
        </>
    )
}

export default Layout;