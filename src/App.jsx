import { Header, Banner, AboutMe, Users, Form, Footer, Modal, MobileMenu } from "./components";

function App() {
  return (
    <>
      <Header />
      {/* <Modal /> */}
      <MobileMenu />
      <main>
        <Banner />
        <AboutMe />
        <Users />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
