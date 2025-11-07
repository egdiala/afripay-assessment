type SvgProps = React.HTMLAttributes<SVGElement>;

export function CreditCardPlusIcon(props: SvgProps) {
    return (
		<svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="var(--contrast-high)">
                <line fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="17" y1="8" y2="8"/>
                <line fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6" x2="9" y1="12" y2="12"/>
                <line fill="none" stroke="var(--contrast-high)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="15" x2="15" y1="18" y2="12"/>
                <line fill="none" stroke="var(--contrast-high)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="18" y1="15" y2="15"/>
                <path d="m17,9.149v-2.149c0-1.6569-1.3431-3-3-3H6c-1.6569,0-3,1.3431-3,3v6c0,1.6569,1.3431,3,3,3h2.6608" fill="none" stroke="var(--contrast-low)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </g>
        </svg>
    );
}