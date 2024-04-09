// children is like a slot in vue,
// but it can't be specific name like in vue (afaik)
// just can be a default slot
const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
