import { ReactNode, createContext, useState } from 'react'

// Define the modal context type
export interface readForm {
    expertNumber: number,
    group: string,
    story: string,
    category: string
}


interface ModalContextValue {
    //
    isOpen: boolean; // Whether the modal is open
    openModal: () => void; // Function to open the modal
    closeModal: () => void; // Function to close the modal
    isNoti: boolean
    openNoti: () => void;
    closeNoti: () => void;
    isShaer: boolean
    openShaer: () => void;
    closeShaer: () => void;
    //
    noti: string;
    setNotiMessage: (e: string) => void
    //
    isOpenReadModal: boolean;
    openReadModal: () => void;
    closeRaedModal: () => void;
    //
    isOpenWriteModal: boolean;
    openWriteModal: () => void;
    closeWriteModal: () => void;
    authen_with_email: string;
    setEmail: (e: string) => void;
    readPrefill: readForm
    setreadPrefill: (e: readForm) => void;

}

// Create the context with a default value
export const ModalContext = createContext<ModalContextValue>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
    isNoti: false,
    openNoti: () => { },
    closeNoti: () => { },
    isShaer: false,
    openShaer: () => { },
    closeShaer: () => { },
    //
    noti: '',
    setNotiMessage: () => { },
    //
    isOpenReadModal: false,
    openReadModal: () => { },
    closeRaedModal: () => { },
    //
    isOpenWriteModal: false,
    openWriteModal: () => { },
    closeWriteModal: () => { },
    setEmail: () => { },
    authen_with_email: '',
    readPrefill: {
        expertNumber: 0,
        group: '',
        story: '',
        category: ''
    },
    setreadPrefill: () => { }
});

const ModalEnd: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNoti, setIsNoti] = useState(false)
    const [noti, setnoti] = useState("")
    const [isShaer, setshare] = useState(false)
    //
    const [isOpenReadModal, setisOpenReadModal] = useState(false)
    const [isOpenWriteModal, setisOpenWriteModal] = useState(false)
    const [authen_with_email, setauthen_with_email] = useState("")

    const [readPrefill, set_readPrefill] = useState({
        expertNumber: 0,
        group: '',
        story: '',
        category: ''
    })

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const openShaer = () => setshare(true)
    const closeShaer = () => setshare(false)
    //
    const openNoti = () => setIsNoti(true)
    const closeNoti = () => setIsNoti(false)
    //
    const setNotiMessage = (e: string) => setnoti(e)
    //
    const openReadModal = () => setisOpenReadModal(true)
    const closeRaedModal = () => setisOpenReadModal(false)
    //
    const openWriteModal = () => setisOpenWriteModal(true)
    const closeWriteModal = () => setisOpenWriteModal(false)
    //
    const setEmail = (e: string) => setauthen_with_email(e)
    //
    const setreadPrefill = (e: readForm) => set_readPrefill(e)

    return (
        <ModalContext.Provider value={{
            isOpen,
            openModal,
            closeModal,
            isNoti,
            openNoti,
            closeNoti,
            noti,
            setNotiMessage,
            isOpenReadModal,
            openReadModal,
            closeRaedModal,
            isOpenWriteModal,
            openWriteModal,
            closeWriteModal,
            setEmail,
            authen_with_email,
            readPrefill,
            setreadPrefill,
            isShaer,
            openShaer,
            closeShaer
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalEnd