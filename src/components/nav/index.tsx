import * as React from 'react';
import { SxProps } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

type ILogoProps = {
    sx?: SxProps
}

const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    {
        label: 'Products', children: [
            { href: '/product/coffee-bean', label: 'Coffee Bean' },
            { href: '/product/honey', label: 'Honey' },
            { href: '/product/charcoal-briquettes', label: 'Charcoal Briquettes' },
        ]
    },
    { href: '/contact', label: 'contact' },
];

const Logo = ({ sx }: ILogoProps) => (
    <Link href="/" >
        <Box
            sx={{
                borderRadius: '99px',
                cursor: 'pointer',
                width: '48px',
                height: '48px',
                background: "url('/img/logo.png') center center",
                backgroundSize: "cover",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                ...sx
            }}
        />
    </Link>
);

const MobileDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <>
            <IconButton
                className="testss"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
                sx={{
                    mr: 2,
                    display: {
                        md: 'none'
                    }
                }}
            >
                <MenuIcon />
            </IconButton>
            <Logo sx={{
                ml: {
                    xs: 'calc(50vw - 100px)',
                    md: 0
                },
                mr: {
                    xs: '0',
                    md: '12px',
                }
            }}/>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ width: '60vw', maxWidth: 320, minWidth: 250, p: '12px' }}>
                    <Logo />
                    {links.map((link, i) => (
                        <div key={i}>
                            {link.href && !link.children ? (
                                <Link href={link.href}>
                                    <Button color="inherit">{link.label}</Button>
                                </Link>
                            ) : (
                                <>
                                    <Button
                                        id={link.label}
                                        color="inherit"
                                        aria-controls={anchorEl?.id === link.label ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={anchorEl?.id === link.label ? 'true' : undefined}
                                        onClick={(e) => setAnchorEl(e.currentTarget)}
                                    >
                                        {link.label}
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={anchorEl?.id === link.label}
                                        onClose={() => setAnchorEl(null)}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        {link?.children?.map((child, i) => (
                                            <MenuItem key={i} sx={{ p: 0 }}>
                                                <Link href={child.href} style={{ width: '100%' }}>
                                                    <Button fullWidth color="inherit" sx={{ justifyContent: 'flex-start' }}>{child.label}</Button>
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            )}
                        </div>
                    ))}
                    <Box sx={{
                        p: '8px',
                        marginTop: '22px',
                        fontSize: '10px',
                        '& >div': {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                        },
                        '& svg': {
                            fontSize: '14px',
                            margin: '0 4px -2px 0',
                        }
                    }}>
                        <div><WhatsAppIcon /> +62-899-6469-000</div>
                        <div><EmailIcon /> mail@dxpor.com</div>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="transparent"
                sx={{ background: '#fff', p: {xs: '4px 0', md: '8px 0'} }}
            >
                <Container maxWidth="lg">
                    <Toolbar variant="dense" sx={{ p: '0 !important' }}>
                        <MobileDrawer />
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                },
                                width: '90%'
                            }}
                        >
                            {links.map((link, i) => (
                                <>
                                    {link.href && !link.children ? (
                                        <Link href={link.href}>
                                            <Button sx={{ mt: '6px' }} color="inherit">{link.label}</Button>
                                        </Link>
                                    ) : (
                                        <>
                                            <Button
                                                sx={{ mt: '6px' }} 
                                                id={link.label}
                                                color="inherit"
                                                aria-controls={anchorEl?.id === link.label ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={anchorEl?.id === link.label ? 'true' : undefined}
                                                onClick={(e) => setAnchorEl(e.currentTarget)}
                                            >
                                                {link.label}
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={anchorEl?.id === link.label}
                                                onClose={() => setAnchorEl(null)}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                {link?.children?.map((child, i) => (
                                                    <MenuItem key={i} sx={{ p: 0 }}>
                                                        <Link href={child.href} style={{ width: '100%' }}>
                                                            <Button fullWidth color="inherit" sx={{ justifyContent: 'flex-start' }}>{child.label}</Button>
                                                        </Link>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    )}
                                </>
                            ))}
                            <Box sx={{
                                float: 'right',
                                p: '4px',
                                fontSize: '14px',
                                '& >div': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '2px',
                                },
                                '& svg': {
                                    fontSize: '16px',
                                    margin: '0 4px -2px 0',
                                }
                            }}>
                                <div><WhatsAppIcon /> +62-899-6469-000</div>
                                <div><EmailIcon /> mail@dxpor.com</div>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Nav;
