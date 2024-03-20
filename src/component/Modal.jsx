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

  return (
    <div>
      <button
        className="bg-primary md:px-5 md:py-4 px-3 py-3 text-white font-bold rounded-lg"
        onClick={toggleModal}
      >
        Subscribe
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
              <div className="__join_waitlist_content font-Sora space-y-2  mb-[3rem]">
                <div className="md:space-y-4 space-y-3 text-left mb-[10%]">
                  <h2 className="text-white md:text-lg text-sm">
                    Hey there, Hilary here!
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">
                    {" "}
                    Big thanks for joining Notes from MainFounder! You've just
                    opened the door to a world brimming with entrepreneurial
                    wisdom. From scaling secrets to starting up online, we've
                    got your back on this adventure to success and freedom.
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">
                    👀 Keep an eye on your inbox; your very first piece, packed
                    with growth tips and insights, is coming your way. Plus,
                    I've dropped a special gift in there for you!
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">
                    Excited to journey with you to the top. Welcome to the
                    family!
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">Cheers,</h2>
                  <h2 className=" text-lg font-extrabold text-primary">
                    Hilary Utuke from MainFounder
                  </h2>
                </div>
                <div className="__modal_text py-[7%] border-t-8 border-primary ">
                  <h2 className="text-white md:text-lg text-sm mb-4">
                    If you read{" "}
                    <span className="md:font-extrabold font-bold">
                      Notes from MainFounder
                    </span>{" "}
                    on Gmail: move Notes from MainFounder to your primary inbox.
                    How?
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">
                    <span className="font-extrabold">On your phone:</span>
                    Tap the 3 dots in the top right corner of an email from us,
                    click <span className="font-extrabold">"Move to"</span> ,
                    then click{" "}
                    <span className="font-extrabold">"Primary".</span>
                  </h2>
                  <h2 className="text-white md:text-lg text-sm">
                    <span className="font-extrabold">On desktop:</span>
                    Drag and drop this email into the "Primary" tab in your
                    inbox. If you use Apple Mail: tap on our email address at
                    the top of this email (in the "From" line) and click "Add to
                    VIPs".
                  </h2>
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
