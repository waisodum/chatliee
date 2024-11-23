import React, { useEffect, useState } from "react";
import ChatAppInstructions from "./Markdown";
import { useRouter } from "next/navigation";

export default function Modal({ showModal, setShowModal }) {
  //   const [showModal, setShowModal] = React.useState(true);
  const router = useRouter();
  const [ischat, setIschat] = useState(false);
  useEffect(() => {
    async function foo() {
      const token = await localStorage.getItem("Token");
      if (!token) {
        setIschat(false);
      } else {
        setIschat(true);
      }
    }
    foo();
  }, []);
  function foo() {
    if (ischat) {
      router.push("/chats");
    } else {
      router.push("/login");
    }
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ChatAppInstructions />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      foo();
                    }}
                  >
                    {ischat ? "Start Chatting" : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
