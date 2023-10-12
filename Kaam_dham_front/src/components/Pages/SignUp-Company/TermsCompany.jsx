import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function TermsCompany({ show, handleClose }) {
  return (
    <div>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          show ? "" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-40"
          onClick={handleClose}
        />
        <div className="flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-[700px] relative">
            <button
              className="absolute top-0 right-0 p-2 pt-0 mb-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <h2 className=" font-bold p-2">
                Terms and Conditions for Kaam-Dhaam Web Application
              </h2>
              <b>1. Acceptance of Terms and Conditions</b>
              <br />
              By accessing or using the Kaam-Dhaam web application (here in after
              referred to as "the App"), you agree to comply with and be bound
              by these terms and conditions. If you do not agree with these
              terms and conditions, you may not use the App. 
              <br /><br />

              <b>2. Use of the App</b>
              <br />
              2.1. The App is intended for personal and business use. You must
              be at least 18 years of age to use the App. If you are using the
              App on behalf of an organization, you represent and warrant that
              you have the authority to bind the organization to these terms and
              conditions.
              <br />
              2.2. You agree not to engage in any unlawful or unauthorized use
              of the App, including, but not limited to, violating intellectual
              property rights, distributing malware, or engaging in fraudulent
              activities.
              <b>3. User Accounts</b>
              <br /><br />

              3.1. To access certain features of the App, you may be required to
              create a user account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
              <br />
              3.2. You agree to provide accurate and up-to-date information
              during the account registration process and to keep your account
              information current.
              <br /><br />

              <b>4. Content and Intellectual Property</b>
              <br />
              4.1. All content on the App, including text, images, logos,
              software, and other materials, are the property of Kaam-Dhaam or
              its licensors and are protected by intellectual property laws.
              <br />
              4.2. Users may not reproduce, distribute, modify, or create
              derivative works from the App's content without explicit written
              permission from Kaam-Dhaam.
              <br /><br />

              <b>5. Privacy</b>
              <br />
              5.1. Your use of the App is also governed by our Privacy Policy,
              which outlines how we collect, use, and share your personal
              information. By using the App, you consent to the terms of our
              Privacy Policy.
              <br /><br />

              <b>6. Termination</b>
              <br />
              Kaam-Dhaam reserves the right to terminate, suspend, or limit your
              access to the App at its discretion without notice if you violate
              these terms and conditions or engage in any conduct that
              Kaam-Dhaam deems harmful or inappropriate.
              <br /><br />

              <b>7. Changes to Terms and Conditions</b>
              <br />
              Kaam-Dhaam may modify these terms and conditions at any time. It
              is your responsibility to review the terms and conditions
              periodically. Continued use of the App following changes implies
              your acceptance of the modified terms.
              <br /><br />

              <b>8. Contact Information</b>
              <br />
              If you have any questions or concerns about these terms and
              conditions, please contact us at [Contact Information].
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsCompany;
