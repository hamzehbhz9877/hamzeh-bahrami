import {useEffect, useRef} from "react";
import useClickOutside from "../../hooks/useOutsideClick";
import {FixedSizeList as List} from 'react-window';
import UseMultiSelect from "../../hooks/useMultiSelect";

import {
    SelectLabel,
    DropdownStyle,
    SelectValues,
    SelectValuesList,
    SelectValuesItem,
    SelectContainer,
    Label,
    DropdownItem,
    ListWrapper
} from "./styles.tsx"

type DropDownListType = {
    label: string
    values: Array<any>
    onChange: (data: Array<any>) => void
}


const DropDownList = ({label, values, onChange}: DropDownListType) => {
    const {
        handleBlur, handleKeyDown, currentValue, handleChange, handleRemoveValue, open, handleClose, handleOpen,
        listRef, setSelection, selection
    } = UseMultiSelect(values)

    const clickOutsideRef = useRef<HTMLDivElement>(null);
    useClickOutside(clickOutsideRef, handleClose);

    useEffect(() => {
        onChange(currentValue);
    }, [currentValue])

    return (
        <SelectContainer ref={clickOutsideRef}>
            <SelectLabel onClick={handleOpen}>
                <SelectValues>
                    {currentValue.length !== 0 ? <>
                        <SelectValuesList>
                            {currentValue.map((value, index) => (
                                <SelectValuesItem>
                                    <span>{value}</span>
                                    <button style={{cursor: "pointer"}} onClick={() => handleRemoveValue(index)}>𝘅
                                    </button>
                                </SelectValuesItem>
                            ))}
                        </SelectValuesList>

                    </> : <Label>{label}</Label>}
                    <button style={{cursor: "pointer"}}><img src={"https://www.svgrepo.com/show/506386/angle-down.svg"}
                                                             width={30} height={30}
                                                             alt={"icon"}/></button>
                </SelectValues>

            </SelectLabel>
            <DropdownStyle isVisible={open}>
                <ListWrapper role="listbox" id="listbox"
                             tabIndex={0}
                             onKeyDown={handleKeyDown}
                             onBlur={handleBlur}
                >
                    <List
                        ref={listRef}
                        className="List"
                        height={200}
                        itemCount={values.length}
                        itemSize={35}
                        width={"100%"}
                    >
                        {({index, style}: any) => {
                            return (
                                <DropdownItem style={style} role="option"
                                              className={`${selection === index ? 'current' : ''}`}
                                              onClick={() => {
                                                  setSelection(index)
                                                  if (!currentValue.some((v) => v === values[index])) {
                                                      handleChange(values[index])
                                                  }
                                              }}
                                              active={currentValue.some((v) => v === values[index])}
                                              key={index}
                                >
                                    {values[index]}
                                </DropdownItem>
                            )
                        }}
                    </List>
                </ListWrapper>
            </DropdownStyle>
        </SelectContainer>
    );
};

export default DropDownList;