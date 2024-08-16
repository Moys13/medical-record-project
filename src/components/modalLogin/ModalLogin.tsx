export const ModalLogin = () => {
  return (
    <dialog className="modal" id="my_modal_1">
      <div className="modal-box">
        <h3 className="font-bold  text-lg">Login</h3>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel
          dolore consectetur adipisci eveniet quis pariatur facilis eaque,
          dolorum fugiat!
        </p>
        <div className="modal-action">
          <form action="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
