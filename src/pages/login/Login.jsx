import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (!name || !surname || !phone || !email || !password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    toast.success("Ma'lumotlar yuborildi! ✅");
  };

  const handleReset = (e) => {
    e.preventDefault();

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setPassword("");
    toast.success("Forma tozalandi! ✅");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="login" className="min-h-[100vh] max-w-[1200px] mx-auto px-4 py-5">
      <div data-aos="zoom-in" className="flex gap-x-5 justify-center">
        <button
          onClick={() => navigate("/")}
          className="h-[35px] px-6 border border-violet-800 rounded-[10px] duration-300 shadow-[3px_3px_5px_#360564] cursor-pointer hover:bg-violet-800"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="h-[35px] px-6 border border-violet-800 rounded-[10px] duration-300 shadow-[3px_3px_5px_#360564] cursor-pointer hover:bg-violet-800"
        >
          Go Back
        </button>
      </div>
      <form data-aos="zoom-in" className="flex flex-col max-w-[600px] mx-auto mt-5 py-2 px-4 rounded-2xl shadow-[0px_2px_8px_3px_#360564]">
        <h1 className="relative text-[26px] w-[80px] mx-auto font-semibold text-center before:absolute before:left-0 before:bottom-0 before:w-[80px] before:h-[2px] before:bg-white before:scale-0 hover:before:scale-100 cursor-pointer before:duration-300">
          Login
        </h1>

        <label htmlFor="name" className="text-[16px] font-semibold mt-3">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="surname" className="text-[16px] font-semibold mt-3">
          Surname
        </label>
        <input
          id="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter Your Surname"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="phone" className="text-[16px] font-semibold mt-3">
          Phone Number
        </label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Your Phone Number"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="email" className="text-[16px] font-semibold mt-3">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <label htmlFor="password" className="text-[16px] font-semibold mt-3">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className="h-[35px] mt-2 border border-[#360564] rounded-[5px] px-2 outline-none shadow-[0px_2px_8px_3px_#360564]"
        />

        <div className="flex mt-5 gap-x-6">
          <button
            onClick={handleReset}
            type="button"
            className="h-[35px] w-full px-6 border border-violet-800 rounded-[10px] duration-300 shadow-[3px_3px_5px_#360564] cursor-pointer hover:bg-violet-800"
          >
            Reset
          </button>
          <button
            onClick={handleSend}
            className="h-[35px] w-full px-6 border border-violet-800 rounded-[10px] duration-300 shadow-[3px_3px_5px_#360564] cursor-pointer hover:bg-violet-800"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
