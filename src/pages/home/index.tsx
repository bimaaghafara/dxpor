
// components
import Layout from "src/components/layout";
import HomeBanner from "./components/home-banner";
import AboutUs from "src/pages/about-us/components/about-us";
import KeyFeatures from "./components/key-features";
import Team from "./components/team";
import Products from "./components/products";

export default function Home() {
  return (
    <Layout maxWidth={false}>
      <HomeBanner />
      <Products />
      <AboutUs />
      <KeyFeatures />
      <Team />
    </Layout>
  );
} 