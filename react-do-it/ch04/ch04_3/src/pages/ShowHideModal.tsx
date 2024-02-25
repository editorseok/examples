import { useCallback } from 'react';
import { Subtitle, Title } from '../components';
import * as D from '../data';
import { useToggle } from '../hooks';
import { Button, Modal, ModalAction, ModalContent } from '../theme/daisyui';

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => toggleOpen(), [toggleOpen]);

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn btn-primary" onClick={toggleOpen}>
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
}

// import { Title, Subtitle } from '../../components';
// import { Modal, ModalContent, ModalAction, Button } from '../../theme/daisyui';
// import * as D from '../../data';

// const ModalTest = () => {
//   const open = true;
//   const closeClicked = () => alert('closeClicked');
//   const acceptClicked = () => alert('acceptClicked');

//   return (
//     <section className="mt-4">
//       <Title>ModalTest</Title>
//       <Modal open={open}>
//         <ModalContent onCloseIconClicked={closeClicked}>
//           <Subtitle>Modal</Subtitle>
//           <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
//           <ModalAction>
//             <Button
//               className="w-24 normal-case btn-primary btn-sm"
//               onClick={acceptClicked}>
//               Accept
//             </Button>
//             <Button className="w-24 normal-case btn-sm" onClick={closeClicked}>
//               Close
//             </Button>
//           </ModalAction>
//         </ModalContent>
//       </Modal>
//     </section>
//   );
// };
