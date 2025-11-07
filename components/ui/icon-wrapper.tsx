import { cn } from "@/lib/utils"

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "ask-area"
}

export default function IconWrapper({ children, className, variant = "default", ...props }: IconWrapperProps) {
    return (
        <div className={cn("relative w-7 h-7 rounded-full grid place-content-center", className)} {...props}>
            {children}
            <span
                className="pointer-events-none absolute inset-0 rounded-full p-px"
                aria-hidden="true"
                style={{
                    mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                }}
            >
                <span className={cn("absolute inset-0 bg-linear-to-b", variant === "default" ? "from-contrast-high/7.5 to-contrast-high/20 dark:hidden" : "from-rose/10 to-rose/30")} />
                <span className={cn("absolute -top-2.5 -left-2.5 size-5 rounded-full blur-[10px] dark:opacity-70", variant === "default" ? "bg-[white]" : "bg-rose/30")} />
                <span className={cn("absolute -right-2 -bottom-2 size-4 rounded-full blur-[10px] dark:opacity-40", variant === "default" ? "bg-[white]" : "bg-rose/60")} />
            </span>
        </div>
    )
}