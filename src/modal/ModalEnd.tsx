import { ReactNode, createContext, useState } from 'react'

// Define the modal context type
interface ModalContextValue {
    isOpen: boolean; // Whether the modal is open
    openModal: () => void; // Function to open the modal
    closeModal: () => void; // Function to close the modal
    isNoti: boolean
    openNoti: () => void;
    closeNoti: () => void;
}

// Create the context with a default value
export const ModalContext = createContext<ModalContextValue>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
    isNoti: false,
    openNoti: () => { },
    closeNoti: () => { }
});

const ModalEnd: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNoti, setIsNoti] = useState(false)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    //
    const openNoti = () => setIsNoti(true)
    const closeNoti = () => setIsNoti(false)
    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, isNoti, openNoti, closeNoti }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalEnd