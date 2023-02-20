import Head from "next/head";
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getURL } from "../utils/helpers";

export default function CallToActionWithAnnotation() {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (user) {
      router.replace("/account");
    }
  }, [user]);

  if (!user)
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Save on extra fees <br />
              <Text as={"span"} color={"green.400"}>
                with Fiatsend
              </Text>
            </Heading>
            <div className="container" style={{ padding: "50px 0 100px 0" }}>
              <Auth
                supabaseClient={supabaseClient}
                redirectTo={getURL()}
                magicLink={true}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: "#404040",
                        brandAccent: "#52525b",
                      },
                    },
                  },
                }}
                theme="dark"
              />
            </div>
            <Text color={"gray.500"}>
              Send money swifty and pay for goods and services at the best fx
              rates
            </Text>
          </Stack>
        </Container>
      </>
    );
}
