import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main className={roboto.className}>
        <Flex direction={"column"} minH={"100vh"}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </main>
    </ChakraProvider>
  );
}
