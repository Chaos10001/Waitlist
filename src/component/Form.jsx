import React from "react";
import Modals from "./Modal";

const Form = () => {
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
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>
                {/* Privacy policy */}
                {/* /Privacy policy */}
                <input type="hidden" name="ml-submit" defaultValue={1} />
                <div className="ml-form-embedSubmit">
                  <Modals />
                  {/* <button type="submit" className="primary">
                    Subscribe
                  </button> */}
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
