"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import { updateUser } from "@/lib/actions/users";
import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";

export default function UpdateNameCard({ name }: { name: string }) {
  const [state, formAction] = useFormState(updateUser, {
    error: "",
  });

  useEffect(() => {
    if (state.success == true) alert("Updated User");
    if (state.error) alert("Error");
  }, [state]);

  return (
    <AccountCard
      params={{
        header: "Your Name",
        description:
          "Please enter your full name, or a display name you are comfortable with.",
      }}
    >
      <form action={formAction}>
        <AccountCardBody>
          <input
            defaultValue={name ?? ""}
            name="name"
            className="block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:outline-neutral-700"
          />
        </AccountCardBody>
        <AccountCardFooter description="64 characters maximum">
          <SubmitBtn />
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
      disabled={pending}
    >
      Updat{pending ? "ing" : "e"} Name
    </button>
  );
};
