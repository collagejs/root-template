export type PinPadProps = {
    pinDispatched?: (pin: string) => void;
    maxPinLength?: number;
    clearOnDispatch?: boolean;
};
