import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
// import SendInput from "../components/input/send-input";
// import ReceieveInput from "../components/input/receive-input";
// import { Banner } from "../components/cta/banner";
// import Exchange from "../components/features/exchange";
// import Annoucement from "../components/announcement";
import { Waitlist } from "../components/cta/waitlist";

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
      <Fragment>
        {/* <Exchange /> */}
        {/* <div className="max-w-6xl px-6"></div> */}
        {/* <Banner /> */}
        <Waitlist />
      </Fragment>
    );
}
