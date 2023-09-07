import React from "react";

type Props = {
  name: string;
  id?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function TextInput({
  name,
  id,
  placeholder,
  error,
  value,
  onChange,
}: Props) {
  return (
    <>
      <div className="inline-flex flex-col basis-12">
        <input
          className="p-2 rounded border shadow-inner shadow-gray-500"
          type="text"
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
        />
        {error ? (
          <span
            id={`${name}-error`}
            className="text-red-500 font-semibold break-words"
          >
            {error}
          </span>
        ) : null}
      </div>
    </>
  );
}
