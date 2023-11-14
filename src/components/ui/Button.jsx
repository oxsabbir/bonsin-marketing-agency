const Button = function (props) {
  return (
    <>
      <button
        className=" bg-pinkBg hover:bg-transparent  duration-300  border-[1px] border-pinkBg hover:border-white p-3 px-7 text-base font-roboto font-medium rounded-sm "
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};
export default Button;
