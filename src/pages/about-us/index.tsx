import Layout from "src/components/layout";
import AboutUs from "./components/about-us";
import Box from "@mui/material/Box";

const AboutUsPage = () => {
    return (
        <Layout>
            <Box sx={{ mb: '48px' }}>
                <AboutUs />
            </Box>
        </Layout>
    );
};

export default AboutUsPage;