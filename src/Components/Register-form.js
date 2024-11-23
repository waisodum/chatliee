"use client";

import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../Helper/Context";
import Select from "react-select";
import gsap from "gsap";
import axios from "axios";
import { useRouter } from "next/navigation";
import LongCat from "./Loader";
const backend = process.env.NEXT_PUBLIC_API;
function Register() {
  const { login, setLogin } = useContext(myContext);
  const [loading, setloading] = useState(true);
  const [username, setUsername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const router = useRouter();

  const changeLoginState = async (e) => {
    e.preventDefault();
    setloading(false);
    var userData = {
      firstname: firstname,
      lastname: lastname,
      email,
      username,
      password,
    };
    try {
      var GG = await axios.post(`${backend}/Register`, userData);

      if (!GG.data.success) {
        if (GG.data.message === "email already exists") {
          setemail("");
        } else {
          setUsername("");
        }

        alert(GG.data.message);
        return null;
      } else {
        await localStorage.setItem("Token", GG.data.token);
        await router.push("/chats");
        setemail("");
        setfirstname("");
        setlastname("");
        setPassword("");
        setUsername("");
        setloading(true);
        return null;
      }
    } catch (err) {
      alert(err);
      return null;
    }
  };

  useEffect(() => {
    console.log("Effect triggered");
    const t = gsap.timeline();

    t.to(".sign-in-title", {
      x: 10,
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <div className="s3">
      <div className="sign-header-section m-[10px] lg:m-[2vw]">
        <div className="sign-in-title">Join us now!!</div>
      </div>
      <form className="input-container" onSubmit={changeLoginState}>
        <input
          value={firstname}
          type="text"
          required
          placeholder="First Name"
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
        />
        <input
          type="text"
          value={lastname}
          required
          placeholder="Last Name"
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />
        <input
          type="text"
          required
          value={username}
          placeholder="User Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          required
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          required
          value={password}
          placeholder="Passowrd"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a href="#" className="alt-f">
          Forgot Password ?
        </a>
        <button className="hover:rounded-[2vw] rounded-[1vw]">Sign in</button>
        <div href="#" className="alt-f-full">
          Already a Member?
        </div>
        <button
          className="p-[.2vw] transition-all duration-1 ease-out border-blue-300 hover:border-b alt-f ml-[0.2vw]"
          onClick={() => {
            setLogin(true);
          }}
        >
          Sign up
        </button>
      </form>
      {!loading && <LongCat />}
    </div>
  );
}

export default Register;
