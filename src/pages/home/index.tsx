
// components
import Layout from "src/components/layout";
import HomeBanner from "./components/home-banner";
import AboutUs from "src/pages/about-us/components/about-us";
import KeyFeatures from "./components/key-features";
import Team from "./components/team";

export default function Home() {
  return (
    <Layout maxWidth={false}>
      <HomeBanner />
      <AboutUs />
      <KeyFeatures />
      <Team />
    </Layout>
  );
} 