import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";
const MyAlertBox = ({ isOpen, onClose, onOpen, ...rest }) => {
  // Router

  const router = useRouter();


  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Attempt Quiz {rest.id}
          </AlertDialogHeader>

          <AlertDialogBody>
            The Quiz is of {rest.timer} minutes .
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            {/* You can pass additional props here */}
            <Button
              colorScheme="green"
              onClick={() => {
                onClose();
                router.push(`/attemptquiz/${rest.id}`);
              }}
              ml={3}
            >
              Start
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default MyAlertBox;
