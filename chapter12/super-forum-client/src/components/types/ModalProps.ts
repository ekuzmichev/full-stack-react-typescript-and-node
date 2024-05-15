export interface ModalProps {
  isOpen: boolean;
  onVisibilityToggle: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}