import { useState } from "react";
import closeBtn from "../assets/carbon_close-filled.png";

const Modals = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <iframe
        title="Zoho Form"
        src="https://zc.vg/5kJbW"
        width="100%"
        onClick={toggleModal}  
        onClick={onSubmit}
      ></iframe> */}
      <button
        className="bg-primary md:px-5 md:py-4 px-3 py-3 text-white font-bold rounded-lg"
        onClick={toggleModal}
        type="submit"
      >
        Try for free
      </button>

      {modal && (
        <div className="modal pt-[59rem]">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div className="__join_waitlist">
              <div className="__close_btn">
                <img
                  src={closeBtn}
                  className="cursor-pointer"
                  onClick={closeModal}
                />
              </div>
              <div className="__join_waitlist_content font-Sora mb-[3rem]">
                <div className="__modal_text border-t-4 rounded-2xl text-left border-primary px-8">
                  <div className="py-[10%]">
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      You’re in! Thanks for subscribing
                    </h2>
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      In few moments, I’ll send you an email to welcome you.
                    </h2>
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      You've just opened the door to a world brimming with
                      entrepreneurial wisdom. From scaling secrets to starting
                      up online, we've got your back on this adventure to
                      success and freedom.
                    </h2>
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      We have moved you to an exclusive list. MainFounder has a
                      special deal for you when our platform is launched.
                      (Imagine access to a database of resources, case studies,
                      accountability system, frameworks, business ideas,
                      webinars, and more…)
                    </h2>
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      Excited to journey with you to the top. Welcome to the
                      family!
                    </h2>
                    <h2 className="text-white md:text-lg text-sm mb-4">
                      Cheers,
                    </h2>
                    <h2 className="text-primary md:text-lg text-sm mb-4 font-bold">
                      Hilary Utuke from MainFounder
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
