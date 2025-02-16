import React, { useState } from "react";
import Modals from "./Modal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Form = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const onSubmit = () => {
    if (!email) {
      toast.error("input your email");
    } else {
      toast.success("email submitted");
      setShowModal(true);
    }
  };
  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '@import url("https://assets.mlcdn.com/fonts.css?version=1711021");',
        }}
      />

      <div
        id="mlb2-13630617"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-13630617"
      >
        <div className="ml-form-align-center ">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{}}></div>
              <form
                className="flex justify-center items-center"
                action="https://assets.mailerlite.com/jsonp/889836/forms/117174385740089212/subscribe"
                data-code
                method="post"
                target="_blank"
                onSubmit={onSubmit}
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      {/* input */}
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
                        data-inputmask
                        name="fields[email]"
                        placeholder="Enter your Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Privacy policy */}
                {/* /Privacy policy */}
                <input type="hidden" name="ml-submit" defaultValue={1} />
                <div className="ml-form-embedSubmit">
                  {/* <Modals /> */}
                  <button
                    className="bg-primary md:px-5 md:py-4 px-3 py-3 text-white font-bold rounded-lg"
                    type="submit"
                  >
                    Try for free
                  </button>
                  {showModal && (
                    <Modals closeModal={() => setShowModal(false)} />
                  )}

                  <button
                    disabled="disabled"
                    style={{ display: "none" }}
                    type="button"
                    className="loading"
                  >
                    <div className="ml-form-embedSubmitLoad" />
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>
                <input type="hidden" name="anticsrf" defaultValue="true" />
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: "none" }}
            >
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
