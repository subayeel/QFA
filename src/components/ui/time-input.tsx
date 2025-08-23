import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { formatTime12Hour, formatTime24Hour } from "@/utils/timeUtils";

interface TimeInputProps {
  value: string | undefined;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export function TimeInput({
  value,
  onChange,
  label,
  placeholder = "Select time",
  className,
}: TimeInputProps) {
  const [displayValue, setDisplayValue] = useState("");

  // Convert 24-hour format to 12-hour format for display
  useEffect(() => {
    if (value && value.trim()) {
      setDisplayValue(formatTime12Hour(value));
    } else {
      setDisplayValue("");
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDisplayValue(inputValue);

    // Try to parse the input as 12-hour format
    if (inputValue.match(/^\d{1,2}:\d{2}\s*(AM|PM)$/i)) {
      const time24Hour = formatTime24Hour(inputValue);
      onChange(time24Hour);
    } else if (inputValue.match(/^\d{1,2}:\d{2}$/)) {
      // If it's just HH:MM format, assume it's 24-hour
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    // On blur, try to format the input properly
    if (displayValue) {
      const time24Hour = formatTime24Hour(displayValue);
      if (time24Hour) {
        setDisplayValue(formatTime12Hour(time24Hour));
        onChange(time24Hour);
      }
    }
  };

  return (
    <div className={className}>
      {label && <Label htmlFor="time-input">{label}</Label>}
      <Input
        id="time-input"
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full"
      />
      <div className="text-xs text-gray-500 mt-1">Format: 1:30 PM or 13:30</div>
    </div>
  );
}
