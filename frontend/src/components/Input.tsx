export function Input({
  referance,
  placeholder,
  type,
}: {
  referance?: any;
  placeholder?: string;
  type: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className="px-4 py-2 rounded-md border-2 shadow-inner outline-none focus:border-black m-2"
        ref={referance}
      />
    </div>
  );
}
