'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';

import IconButton from '@/components/ui/icon-button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as='div' className='relative z-[9999]' onClose={onClose}>
        <div className='fixed inset-0 bg-black bg-opacity-50' />

        <div className='fixed inset-0 overflow-y-auto'>
          <div
            className='flex min-h-full items-center justify-center p-4 text-center'
            onMouseLeave={onClose} // Close modal when mouse leaves
          >
            <div className='flex min-h-full items-center justify-center p-4 text-center bg-slate-100'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle'>
                  <div className='relative flex-grow w-full items-center bg-slate-100 px-4 pb-1 pt-1 sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                    <div className='absolute right-4 top-4'>
                      <IconButton
                        onClick={onClose}
                        className='absolute top-0 right-0 bg-gray-100 hover:bg-white hover:text-customBlue w-8 h-8 flex items-center justify-center'
                        icon={<X size={15} className='text-red-500' />}
                      />
                    </div>
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
