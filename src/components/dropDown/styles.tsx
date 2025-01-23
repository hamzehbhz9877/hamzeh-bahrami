import styled, {css} from "styled-components";

const SelectContainer = styled.div`
    width: min(90%, 400px);
    margin: auto;
    padding-top: 30px;
    position: relative;
`;
const SelectLabel = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    border-color: #96c8da;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-style: solid;
`;

const DropdownStyle = styled.div<{ isVisible: boolean; }>`
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: #fafafa;
    border: 1.5px solid slategrey;
    transition: max-height 0.2s ease;
    overflow-y: auto;
    ${(p) =>
            !p.isVisible && css`
                visibility: hidden;
            `}
`;

const DropdownItem = styled.li<{ active: boolean; }>`
    display: flex;
    align-items: center;
    margin: 0.15rem 0;
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: #333;
    border-radius: 0.3rem;
    cursor: pointer;

    ${(p) =>
            p.active &&
            css`
                color: #166edc;
                font-weight: 500;
            `}
`;


const ListWrapper = styled.ul`

`;

const SelectValues = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SelectValuesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`;

const SelectValuesItem = styled.li`
    background-color: #ccc;
    border-radius: 6px;
    padding: 3px 8px;
    display: flex;
    gap: 3px;
    align-items: center;
`;

const Label = styled.span`
    display: inline-block;
    padding: 3px 8px;
`;


export {SelectLabel,DropdownStyle,SelectValues, SelectValuesList, SelectValuesItem, SelectContainer, Label, DropdownItem, ListWrapper}