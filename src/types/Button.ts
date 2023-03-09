interface IButton {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export default IButton;