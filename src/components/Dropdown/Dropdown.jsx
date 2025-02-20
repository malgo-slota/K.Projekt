import React, {useState} from 'react';
import { DropdownWrapper, Menu, DropdownBtn } from './Dropdown.styles';

const Dropdown = ( { setSubject }) => {

    const subjectsArray = [
        'Projekt budynku mieszkalnego/uzytku publicznego',
        'Projekt budynku produkcyjnego/usługowego',
        'Projekt domu jednorodzinnego',
        'Projekt wnętrza',
        'Adaptacja projektu',
        'Zmiana sposobu uzytkowania',
        'Pomoc/doradztwo w sprawie formalnej',
        'Inny',
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const changeSubject = (item) => {
        setSubject(item);
        setOpen(false);
    }

    return (
        <DropdownWrapper>
        <DropdownBtn onClick={handleOpen}>&#8249;</DropdownBtn>
        {open ? (
            <Menu className="menu">
                {subjectsArray.map((item)=> (
                    <li className="menu-item" onClick={() => changeSubject(item)}>
                        <p>{item}</p>
                    </li>
                )
            )}
            </Menu>
        ) : null}

        </DropdownWrapper>
    );
};

export default Dropdown;