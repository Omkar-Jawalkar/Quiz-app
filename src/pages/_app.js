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
import { MyContextProvider } from "@/context/myContext";
import CustomTheme from "@/theme/CustomTheme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <main style={{ backgroundColor: "#101820" }} className={roboto.className}>
        <Flex direction={"column"} minH={"100vh"}>
          <MyContextProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </MyContextProvider>
        </Flex>
      </main>
    </ChakraProvider>
  );
}
