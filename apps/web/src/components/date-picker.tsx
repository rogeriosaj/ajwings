"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value?: string;
  onChange?: (date: string) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, className = "", value, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Fechar ao clicar fora
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

    const handleSelectDate = (day: number) => {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(newDate);
      setIsOpen(false);
      if (onChange) {
        // Formato YYYY-MM-DD
        const formatted = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;
        onChange(formatted);
      }
    };

    const isSelected = (day: number) => {
      return selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth() && selectedDate?.getFullYear() === currentDate.getFullYear();
    };

    return (
      <div className="flex flex-col gap-2 w-full" ref={containerRef}>
        {label && (
          <label className="text-sm font-bold opacity-80 text-on-surface">
            {label}
          </label>
        )}
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full bg-surface text-on-surface rounded-lg px-4 py-3 border-2 border-transparent outline-none focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all cursor-pointer flex items-center justify-between ${className}`}
          >
            <span className={selectedDate ? "opacity-100 font-medium" : "opacity-50"}>
              {selectedDate ? selectedDate.toLocaleDateString("pt-BR") : "Selecione uma data..."}
            </span>
            <CalendarIcon className="w-5 h-5 opacity-50" />
          </div>

          <input type="hidden" ref={ref} value={value || ""} {...props} />

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-surface-container-highest rounded-xl p-4 shadow-2xl z-50 w-full min-w-[280px] border border-on-surface/5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <button type="button" onClick={handlePrevMonth} className="p-1 hover:bg-surface rounded-md transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="font-bold text-sm">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
                <button type="button" onClick={handleNextMonth} className="p-1 hover:bg-surface rounded-md transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid gap-1 mb-2" style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
                {dayNames.map(day => (
                  <div key={day} className="text-center text-xs font-bold opacity-50 py-1">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectDate(day);
                      }}
                      className={`
                        w-8 h-8 mx-auto rounded-full text-sm flex items-center justify-center transition-all
                        ${isSelected(day) ? "bg-primary text-primary-foreground font-bold shadow-md" : "hover:bg-surface-container-low"}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

