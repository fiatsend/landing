import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { SuccessToast } from "../toast/success";
import { ErrorToast } from "../toast/error";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  //const toast = useToast();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      const data = await res.json();
      if (data.success) {
        setToast("success");
        setTimeout(() => {
          setToast("");
        }, 5000);
      } else {
        throw new Error(
          data?.error || "Something went wrong, please try again later"
        );
      }
    } catch (e) {
      setToast("error");
      setTimeout(() => {
        setToast("");
      }, 5000);
    }
    setLoading(false);
  };
  return (
    <div className="relative overflow-hidden" id="waitlist">
      <div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-blue-500">We&apos;re </span>
                  <span className="block text-black">Lauching Soon</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Be the first to try out our features when we launch
                </p>
                <div className="mt-10 sm:mt-12">
                  <form
                    onSubmit={handleFormSubmit}
                    className="sm:mx-auto sm:max-w-xl lg:mx-0"
                  >
                    <div className="sm:flex">
                      <input
                        type="hidden"
                        name="access_key"
                        value="YOUR_ACCESS_KEy_HERE"
                      />
                      <input
                        type="hidden"
                        name="subject"
                        value="New Waitlist"
                      />
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          value={email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                          }
                          autoComplete="on"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          disabled={loading || !email}
                          className={`${
                            loading
                              ? "bg-green-500 hover:bg-green-200"
                              : "bg-blue-500 hover:bg-blue-400"
                          } block w-full rounded-md py-3 px-4 font-medium text-white shadow  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900`}
                        >
                          Join Waitlist
                        </button>
                      </div>
                    </div>
                    {toast === "success" && <SuccessToast />}
                    {toast === "error" && <ErrorToast />}
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 hidden lg:block">
              <Image
                width={400}
                height={100}
                className=""
                src="/waitlist.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
