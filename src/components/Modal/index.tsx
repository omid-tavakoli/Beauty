import { FC, ReactNode } from "react";

interface IProps {
  id?: string;
  children: ReactNode;
  title?: string;
  wrapperClassName?: string;
  backdrop?: () => void;
  borderClassName?: string;
}

const Modal: FC<IProps> = (props) => {
  const { id, children, title, wrapperClassName, backdrop, borderClassName } =
    props;
  return (
    // <dialog id={id} dir="rtl" className="modal">
    //   <div
    //     className={`modal-box ${wrapperClassName} !max-h-none h-full sm:!max-h-[calc(100vh-1.5rem)] bg-white !rounded-none sm:!rounded-[2.25rem] !pt-3 sm:!pt-5 !p-5 w-full sm:w-[91.666667%] max-w-none sm:max-w-[34.375rem]`}
    //   >
    // <form method="dialog" className="modal-backdrop">
    //   <button className="absolute z-10 left-5 top-3 sm:top-5 !outline-0 active:scale-125 cursor-pointer">
    //     <svg width="24" height="24">
    //       <use
    //         href={"/assets/images/icons/userAccount.svg#close-btn-modal"}
    //       ></use>
    //     </svg>
    //   </button>
    // </form>
    // <div className="modal-title text-sm font-bold text-black">{title}</div>
    //     <div className="custom-divider my-4" />
    //     <div className="modal-body h-fit">{children}</div>
    //   </div>
    // <form method="dialog" className="modal-backdrop">
    //   <button />
    // </form>
    // </dialog>

    // try to fix

    <dialog id={id} className="modal backdrop:!bg-black/30 ">
      <div
        className={`modal-box !overflow-hidden ${wrapperClassName} !max-w-[46.375rem] !p-0 !pb-3 bg-white `}
      >
        <div className="sticky bg-white top-0.5 z-40">
          {/* <div className="marker:modal-title px-6 pt-6 h-fit flex items-center  justify-between">
             <p className="text-base leading-6 font-medium text-black">
               {props?.title}
             </p>
             <form
               method="dialog"
               className="absolute left-6 top-6 z-10 modal-backdrop"
             >
               <button onClick={props?.backdrop}>
                 <svg
                   width="24"
                   height="24"
                   className="fill-black stroke-transparent"
                 >
                   <use href={"images/icons/panel.svg#close"}></use>
                 </svg>
               </button>
             </form>
           </div> */}
          <form method="dialog" className="modal-backdrop">
            <button className="absolute z-10 px-4 left-5 top-2.5 sm:top-2.5 !outline-0 active:scale-125 cursor-pointer">
              <svg width="24" height="24">
                <use
                  href={"/assets/images/icons/userAccount.svg#close-btn-modal"}
                ></use>
              </svg>
            </button>
          </form>
          <div className="modal-title text-sm font-bold text-black m-2.5 ps-3">
            {title}
          </div>{" "}
          <div className={`custom-divider my-3.5 ${borderClassName}`} />
        </div>
        <div className="modal-body px-6 py-1 h-[calc(100vh-10rem)] overflow-y-auto">
          {children}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  );
};

export default Modal;
