import { useState } from 'react'
import { Header, Banner, AboutMe, Users, Form, Footer, Modal, MobileMenu } from "./components";

function App() {

  const [mobMenuVisible, setMobMenuVisible] = useState(false);

  const visibleMobMenu = () => {
    setMobMenuVisible(true);
  }
  const hideMobMenu = () => {
    setMobMenuVisible(false);
  }

  return (
    <>
      <Header visibleMobMenu={visibleMobMenu} />
      {/* <Modal /> */}
      { mobMenuVisible && <MobileMenu hideMobMenu={hideMobMenu} />}
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
