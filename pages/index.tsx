import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SendInput from "../components/input/send-input";
import ReceieveInput from "../components/input/receive-input";

export default function Homepage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/account");
    }
  }, [user, router]);

  if (!user)
    return (
      <div className="max-w-6xl px-6">
        <div className="flex flex-col">
          <div className="flex-end my-2">
            <SendInput />
          </div>
          <div className="flex-end my-2">
            <ReceieveInput />
          </div>
        </div>
      </div>
    );
}
