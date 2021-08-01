import Head from "next/head";

import Header from "../components/header";

import Section from "../components/section";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Felipe Marcon</title>
        <meta
          name="description"
          content="I am a Product Designer with front-end skills based in Brazil"
        />
      </Head>

      <Header />

      <Section>
        <Container>
          <h1>About</h1>
        </Container>
      </Section>
    </>
  );
}
