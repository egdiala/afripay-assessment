type SvgProps = React.HTMLAttributes<SVGElement>;

export function CreditCardMinusIcon(props: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
            <g fill="var(--contrast-high)">
                <line x1="3" y1="8" x2="17" y2="8" fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
                <line x1="6" y1="12" x2="9" y2="12" fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
                <path d="m17,11.5v-4.5c0-1.6569-1.3431-3-3-3H6c-1.6569,0-3,1.3431-3,3v6c0,1.6569,1.3431,3,3,3h2.6625" fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line x1="12" y1="15" x2="18" y2="15" fill="none" stroke="var(--contrast-high)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
            </g>
        </svg>
    );
}