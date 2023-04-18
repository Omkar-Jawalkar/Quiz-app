import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  components: {
    Input: {
      baseStyle: (props) => ({
        "::placeholder": {
          color: props.colorMode === "dark" ? "red.200" : "green.200", // Change the placeholder color here
        },
      }),
    },
  },
});

export default CustomTheme;
