import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="pawankrt1122@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8430061417" Image={FiPhone} />
      <SingleInfo text="Pawan Kumar, Bihar" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
