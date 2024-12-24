import { ReactNode, createContext, useState } from 'react'

// Define the modal context type
interface ModalContextValue {
    isOpen: boolean; // Whether the modal is open
    openModal: () => void; // Function to open the modal
    closeModal: () => void; // Function to close the modal
    isNoti: boolean
    openNoti: () => void;
    closeNoti: () => void;
    //
    noti: string;
    setNotiMessage: (e: string) => void
}

// Create the context with a default value
export const ModalContext = createContext<ModalContextValue>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
    isNoti: false,
    openNoti: () => { },
    closeNoti: () => { },
    //
    noti: '',
    setNotiMessage: () => { }
});

const ModalEnd: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNoti, setIsNoti] = useState(false)
    const [noti, setnoti] = useState("")

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    //
    const openNoti = () => setIsNoti(true)
    const closeNoti = () => setIsNoti(false)
    //
    const setNotiMessage = (e: string) => setnoti(e)
    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, isNoti, openNoti, closeNoti, noti, setNotiMessage }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalEnd