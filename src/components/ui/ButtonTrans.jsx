const ButtonTrans = function (props) {
  return (
    <>
      <button
        className=" bg-transparent border-[1px] p-3 px-7 text-base font-roboto font-medium rounded-sm "
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};
export default ButtonTrans;
