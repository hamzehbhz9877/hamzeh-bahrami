import {useEffect, useRef, useState} from 'react';

const UseMultiSelect = (values: Array<any>) => {

    const [currentValue, setCurrentValue] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const listRef = useRef(null);
    const [selection, setSelection] = useState(null) as any;

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleValueChange = (value: string) => setCurrentValue([...currentValue, value]);


    const handleRemoveValue = (Idx: number) => setCurrentValue(currentValue.filter((_, index) => Idx !== index));

    const handleBlur = () => setSelection(null);

    const handleChange = (value: string) => handleValueChange(value);


    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleKeyPress()
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (selection === null) {
                setSelection(0);
            } else {
                setSelection(Math.min(values.length - 1, selection + 1));
            }
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (selection === null) {
                setSelection(0);
            } else {
                setSelection(Math.max(0, selection - 1));
            }
        }
    };

    useEffect(() => {
        const list: any = listRef.current;
        if (!list) return;

        if (selection === null) return;

        list.scrollToItem(selection);
    }, [selection]);

    const handleKeyPress = () => {
        if (!currentValue.some((v) => v === values[selection]))
            handleValueChange(values[selection]);
    };

    return {
        selection,
        setSelection,
        listRef,
        handleBlur,
        handleKeyDown,
        handleValueChange,
        handleChange,
        handleRemoveValue,
        open,
        handleClose,
        handleOpen,
        currentValue
    };
};

export default UseMultiSelect;