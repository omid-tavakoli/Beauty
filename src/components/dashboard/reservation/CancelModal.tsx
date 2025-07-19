import Modal from "@/components/Modal";
import Button from "@/components/theme/Button";

const CancelModal = () => {
  return (
    // <dialog id="CancelModal" dir="rtl" className="modal">
    //   <div className="modal-box  bg-white  !pt-3 sm:!pt-5 !p-5 w-full sm:w-[91.666667%] max-w-none sm:max-w-[34.375rem]">
    //     <div className="modal-body h-fit">oiugfdfghjkl</div>
    //   </div>
    //   <form method="dialog" className="modal-backdrop">
    //     <button />
    //   </form>
    // </dialog>
    <Modal id="CancelReserveModal" title="از لغو  اطمینان دارید؟">
      <p className="text-black font-normal text-sm">
        درصورت تائید بیعانه شما عودت داده میشود
      </p>
      <div className="flex flex-row font-semibold text-sm justify-around">
        <Button>انصراف</Button>
        <Button>مطمئنم</Button>
      </div>
    </Modal>
  );
};
export default CancelModal;
