"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function Counter({ name }: { name: string }) {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="flex items-center gap-x-4">
        <input type="hidden" name={name} value={amount} />
        <Button
          onClick={() => {
            if (amount > 0) {
              setAmount(amount - 1);
            }
          }}
          variant={"outline"}
          size={"icon"}
          type="button"
        >
          <Minus className="w-4 h-4 text-primary" />
        </Button>
        <p>{amount}</p>
        <Button
          onClick={() => setAmount(amount + 1)}
          variant={"outline"}
          size={"icon"}
          type="button"
        >
          <Plus className="w-4 h-4 text-primary" />
        </Button>
      </div>
    </>
  );
}

export default Counter;
