import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={null}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ModalBody>
          <Image
            objectFit="cover"
            maxWidth="900px"
            maxHeight="600px"
            src={imgUrl}
          />
          <ModalFooter bg="gray.700" display="flex" justifyContent="flex-start">
            <Link href={imgUrl} isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
