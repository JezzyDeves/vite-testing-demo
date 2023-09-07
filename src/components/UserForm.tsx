import { useState } from "react";
import { z } from "zod";
import TextInput from "./TextInput";

type Props = {};

const validationSchema = z.object({
  username: z.string().nonempty("Please enter a username"),
});
type FormSchema = z.infer<typeof validationSchema>;

export default function UserForm({}: Props) {
  const [formData, setFormData] = useState<FormSchema>({ username: "" });
  const [errors, setErrors] = useState<z.ZodError<FormSchema>>();

  return (
    <>
      <form
        className="m-4 flex"
        onSubmit={(e) => {
          e.preventDefault();

          const result = validationSchema.safeParse(formData);

          if (!result.success) {
            setErrors(result.error);
          } else {
            // TODO
          }
        }}
      >
        <TextInput
          name="username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          error={errors?.formErrors.fieldErrors.username?.[0]}
          placeholder="Username"
        />

        <div>
          <button
            className="mx-2 p-2 font-bold text-white bg-sky-400 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
