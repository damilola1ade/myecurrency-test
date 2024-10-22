interface ButtonProps {
  text?: string;
}

export default function Button({ text = "Visit Shop" }: ButtonProps) {
  return (
    <button className="w-full sm:w-[160px] bg-[#fc5959] p-3 rounded-md text-white">
      {text}
    </button>
  );
}
