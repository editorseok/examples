import { useCallback } from 'react';
import { Subtitle, Title } from '../components';
import { useToggle } from '../hooks';
import { Button, Modal, ModalContent, ModalAction } from '../theme/daisyui';
import * as D from '../data';

const ShowHideModal = () => {
  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  return (
    <section>
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          closeIconClassName="btn-primary btn-outline"
          onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <button className="btn btn-primary" onClick={onAccept}>
              Accept
            </button>
            <button className="btn" onClick={toggleOpen}>
              Close
            </button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default ShowHideModal;
