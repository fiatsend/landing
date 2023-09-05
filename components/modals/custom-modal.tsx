import React, { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
    setModal: Dispatch<SetStateAction<boolean>>
    children: React.ReactNode
}

const CustomModal: React.FC<ModalProps> = ({
    setModal,
    children
}) => {
    const [open, setOpen] = useState(true)
    setModal(open);

    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#F3F4F666] backdrop-blur-sm bg-opacity-25 transition-opacity" />

                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-6 pb-4 pt-5 sm:p-6 sm:pb-4">
                            {children}
                        </div>
                    </Dialog.Panel>
                </Transition.Child>

            </Dialog>
        </Transition.Root>
    );
};

export default CustomModal;