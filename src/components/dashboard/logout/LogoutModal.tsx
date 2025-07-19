import Modal from "@/components/Modal";
import Button from "@/components/theme/Button";
import { closeModalHandler } from "@/service/utils/modalHandler";
import { logoutUser } from "@/service/utils/serverAuth";
import { useFormState } from "react-dom";

const LogOutModal = () => {
  const [state, userLogoutDispatch] = useFormState<any>(async () => {
    logoutUser();
  }, undefined);

  return (
    <Modal id="logoutUser" title="از حساب کاربری خود  خاج میشوید؟">
      <div className="">
        <p>
          با خروج از حساب کاربری به آن دسترسی نخواهید داشت ، هروقت بخواهید
          میتوانید مجددا وارد شوید.
        </p>
        <div className="flex flex-row justify-end w-full gap-x-3 pt-3">
          <Button
            onClick={() => {
              closeModalHandler("logoutUser");
            }}
            className="modal-backdrop font-medium  border-pink-primary -base text-pink-primary w-28 z-10 "
          >
            انصراف
          </Button>
          <Button
            onClick={userLogoutDispatch}
            className="font-semibold text-sm bg-pink-primary text-white "
          >
            خروج از حساب
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default LogOutModal;
