import { Header, Banner, AboutMe, Users, Form, Footer, Modal } from "./components";

function App() {
  return (
    <>
      <Header />
      <Modal />
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
