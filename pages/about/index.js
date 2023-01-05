import { useState, useRef} from "react";
import Link from 'next/link';
import {ImSpinner2} from 'react-icons/im';
import Navbar from "../../components/Navbar";

const About = () => {
  // States for contact form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // States for character count
  const [texAreaCount, setTexAreaCount] = useState(500);
  
  const characterCount = (keyPressed) => {
    if( keyPressed.keyCode == 8 && texAreaCount != 500){
      setTexAreaCount(texAreaCount + 1);
    } else if(  keyPressed.keyCode == 9   ||
                keyPressed.keyCode == 16  || 
                keyPressed.keyCode == 17  ||
                keyPressed.keyCode == 18  ||
                keyPressed.keyCode == 20  ||
                keyPressed.keyCode == 27  ||
                keyPressed.keyCode == 33  ||
                keyPressed.keyCode == 34  ||
                keyPressed.keyCode == 35  ||
                keyPressed.keyCode == 36  ||
                keyPressed.keyCode == 37  ||
                keyPressed.keyCode == 38  ||
                keyPressed.keyCode == 39  ||
                keyPressed.keyCode == 40  ||
                keyPressed.keyCode == 44  ||
                keyPressed.keyCode == 91  ||
                keyPressed.keyCode == 92  ||
                keyPressed.keyCode == 112 ||
                keyPressed.keyCode == 113 ||
                keyPressed.keyCode == 114 ||
                keyPressed.keyCode == 115 ||
                keyPressed.keyCode == 116 ||
                keyPressed.keyCode == 117 || 
                keyPressed.keyCode == 118 || 
                keyPressed.keyCode == 119 || 
                keyPressed.keyCode == 120 ||
                keyPressed.keyCode == 121 || 
                keyPressed.keyCode == 122 ||
                keyPressed.keyCode == 123 ||
                keyPressed.keyCode == 144 ||
                keyPressed.keyCode == 145 ||
                keyPressed.keyCode == 173 ||
                keyPressed.keyCode == 174 ||
                keyPressed.keyCode == 175 ||
                keyPressed.keyCode == 181 ||
                keyPressed.keyCode == 182 ||
                keyPressed.keyCode == 183 ||
                texAreaCount == 0 
                ){
      setTexAreaCount(texAreaCount + 0)
    } else {
      setTexAreaCount(texAreaCount - 1);
    }
  };
  // Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success text on form subbmision
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  


  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Somethin Went Wrong");

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Email Sent");
      setName("")
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(name, email, subject, message);
  };
  
  // TODO: Validations

  return (
    <div className="text-[white]">
      <div className="bg-black">
        <main className="overflow-hidden">

          {/* Header */}
          <Navbar imgSrc=""/>

          {/* Contact section */}
          <section
            className="relative bg-black mt-[5rem] mb-[5rem] md:mt-[3rem]"
            aria-labelledby="contact-heading"
          >
            <div
              className="absolute w-full h-1/2 bg-warm-gray-50"
              aria-hidden="true"
            ></div>
            {/* Decorative dot pattern */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative bg-black shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Contact information */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-[black] to-gray-900 py-10 px-6 sm:px-10 xl:p-10">
                    <Link href='/'>
                    <img
                      alt="Logo Banner"
                      src="assets/logo/LynxBannerRed.svg"
                      className="w-[60px] mr-[auto] cursor-pointer"
                    />
                    </Link>
                    <div
                      className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                      aria-hidden="true"
                    ></div>
                    <h3 className="mt-1 text-lg font-medium text-white">
                      ABOUT
                    </h3>
                    <p className="max-w-3xl mt-6 text-base text-teal-50">
                      For All the iquiries and information regarding this
                      website, please contact us bellow including your contact
                      email and with any further instructionson how to reach
                      you. we will respond promptly. Thank you for visiting.
                    </p>
                    <dl className="mt-8 space-y-6">
                      <dt>
                        <span className="sr-only">Phone number</span>
                      </dt>
                      <dd className="flex text-base text-teal-50">
                        {/* Heroicon name: outline/phone */}
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-white"
                          xmlns="httpss://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                        <span className="ml-3">+1 (212) 963-1234</span>
                      </dd>
                      <dt>
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd className="flex text-base text-white">
                        {/* Heroicon name: outline/envelope */}
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-white"
                          xmlns="https://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        <span className="ml-3">dev@mdx-ux.com</span>
                      </dd>
                    </dl>
                    <ul role="list" className="flex mt-8 space-x-3">
                      <li>
                        <a
                          className="text-[#f1bc70] hover:text-white"
                          href="https://github.com/AleksandreTch"
                        >
                          <span className="sr-only">GitHub</span>
                          <svg
                            className="h-7 w-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                              0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
                              1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                              0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 
                              2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 
                              4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="translate-y-2">
                        <a
                          className="text-white text-[.75rem] flex"
                          href="https://alextch.com"
                        >
                          Developed By
                          <svg
                            className="translate-x-1 translate-y-[.15rem]"
                            width="76.38"
                            height="12.87"
                            viewBox="0 0 611 103"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M76.1452 96.52L71.6652 82.824H41.4572L36.9772 
                                    96.52H7.15315L40.3052 5.896H73.0732L106.097 96.52H76.1452ZM237.719 
                                    96.52V73.864H205.719V61.064H233.879V39.688H205.719V28.552H237.719V5.896H177.303V96.52H237.719ZM242.719 
                                    15.5207V33.552H238.879V34.688V66.064V68.864H242.719V88.1502L267.107 
                                    49.9453L242.719 15.5207ZM273.132 49.8L243.308 96.52H275.692L289.516 72.968L306.156 96.52H339.82L308.076 
                                    51.72L337.388 5.896H305.004L291.692 28.552L275.692 5.896H242.028L273.132 49.8ZM341.058 
                                    28.424H364.866V96.52H393.282V28.424H417.346V5.896H341.058V28.424ZM503.389 80.264C506.374 76.1766 508.593 
                                    71.5713 510.049 66.448C510.508 64.8328 510.89 63.1661 511.197 61.448H481.245C479.88 64.4347 477.917 66.7813 
                                    475.357 68.488C472.883 70.1093 470.024 70.92 466.781 70.92C462.003 70.92 458.205 69.128 455.389 65.544C452.659 
                                    61.96 451.293 57.1387 451.293 51.08C451.293 45.0213 452.659 40.2 455.389 36.616C458.205 33.032 462.003 31.24 
                                    466.781 31.24C470.024 31.24 472.883 32.0933 
                                    475.357 33.8C477.917 35.4213 479.88 37.7253 481.245 40.712H511.197C510.89 38.9939 510.508 37.3272 510.049 
                                    35.712C508.593 30.5887 506.374 25.9834 503.389 21.896C499.549 16.52 494.514 12.3813 488.285 9.48C482.141 
                                    6.49334 475.144 5 467.293 5C458.163 5 450.227 6.96267 443.485 10.888C436.744 14.728 431.539 20.1467 
                                    427.869 27.144C424.285 34.1413 422.493 42.12 422.493 51.08C422.493 60.04 424.285 68.0187 427.869 
                                    75.016C431.539 82.0133 436.744 87.4747 443.485 91.4C450.227 95.24 458.163 97.16 467.293 97.16C475.144 
                                    97.16 482.141 95.7093 488.285 92.808C494.514 89.8213 499.549 85.64 503.389 80.264ZM549.844 
                                    61.192H576.852V96.52H605.268V5.896H576.852V38.536H549.844V5.896H521.428V96.52H549.844V61.192ZM140.969 
                                    75.016V5.896H112.553V96.52H168.361V75.016H140.969ZM56.5612 36.232L48.3692 61.448H64.7532L56.5612 36.232Z"
                              fill="#f1bc70"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* contact Form */}
                  <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      CONTACT US
                    </h3>
                    <form
                      action="/api/sendgrid"
                      method="post"
                      className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      encType="text/plain"
                      onSubmit={submitHandler}
                    >
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="block w-full bg-[transparent] 
                                     border-b-[white] border-b-[2px] py-3 px-2 
                                     text-warm-gray-900 shadow-sm outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            value={email}
                            id="email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full bg-[transparent] 
                            border-b-[white] border-b-[2px] py-3 px-2 
                            text-warm-gray-900 shadow-sm outline-none"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Subject
                        </label>
                        <div className="mt-1">
                          <input
                            value={subject}
                            type="text"
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                            name="subject"
                            id="subject"
                            className="block w-full bg-[transparent] 
                            border-b-[white] border-b-[2px] py-3 px-2 
                            text-warm-gray-900 shadow-sm outline-none"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-warm-gray-900"
                          >
                            Message
                          </label>
                          <span
                            id="message-max"
                            className="text-sm text-warm-gray-500"
                          >
                            {`Characters: ${texAreaCount}`}
                          </span>
                        </div>
                        <div className="mt-1 select-none">
                          <textarea
                            value={message}
                            id="message"
                            onKeyDown={characterCount}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                            name="message"
                            rows="4"
                            maxLength="500"
                            placeholder="Type your message here"
                            className="block w-full rounded-md border-warm-gray-300 
                                       py-3 px-4 text-warm-gray-900 shadow-sm
                                       bg-[transparent] border-grey-800 border-[1px] 
                                       mt-0 md:mt-[1rem] select-none"
                            aria-describedby="message-max"
                          ></textarea>
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          
                          className={showSuccessMessage ? "mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-800 px-6 py-3 text-base tracking-[.25rem] uppercase font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 sm:w-auto" : "mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#f1bc70] px-6 py-3 text-base tracking-[.25rem] uppercase font-medium text-black shadow-sm hover:bg-[#ae854b] focus:outline-none focus:ring-2 focus:ring-[#ae854b] focus:ring-offset-2 sm:w-auto"}
                        >
                          {buttonText}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
