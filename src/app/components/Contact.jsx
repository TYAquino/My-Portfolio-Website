import { CONTACT } from "../constants/index";

const Contact = () => {
  return (
    <div className="pb-20">
      <h2 className="my-10 text-center text-4xl">Contact Me</h2>
      <div className="text-center tracking-tighter text-lg text-neutral-400">
        <a
          href={`mailto:${"trishasalubreaquino@gmail.com"}`}
          className="hover:text-purple-400 transition duration-300 ease-in-out border-b-2"
        >
          {CONTACT.email}
        </a>
        <p className="my-2">{CONTACT.phoneNo}</p>
        <p className="my-2">{CONTACT.address}</p>
      </div>
    </div>
  );
};

export default Contact;
