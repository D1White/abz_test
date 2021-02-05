import { useState, useRef } from "react";
import {
  Header,
  Banner,
  AboutMe,
  Users,
  Form,
  Footer,
  Modal,
  MobileMenu,
} from "./components";

import { FormContext } from "./utils/Context";

function App() {
  const formBlock = useRef();

  const [mobMenuVisible, setMobMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const visibleMobMenu = () => {
    setMobMenuVisible(true);
  };
  const hideMobMenu = () => {
    setMobMenuVisible(false);
  };
  const visibleModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <FormContext.Provider value={formBlock}>
        <Header visibleMobMenu={visibleMobMenu} />
        { mobMenuVisible && <MobileMenu hideMobMenu={hideMobMenu} /> }
        { modalVisible && <Modal hideModal={hideModal} /> }
        <main>
          <Banner />
          <AboutMe />
          <Users modalVisible={modalVisible} />
          <div className='form-ref' ref={formBlock}>
            <Form visibleModal={visibleModal} />
          </div>
        </main>
      </FormContext.Provider>
      <Footer />
    </>
  );
}

export default App;
